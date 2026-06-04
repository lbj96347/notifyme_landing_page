// Shared site constants. Webhook examples mirror the canonical contract owned
// by ../notifyme/ (firebase_functions + examples/). If the backend contract
// changes, update these snippets in lockstep.

// Canonical production origin. Used for metadataBase, sitemap, robots, and
// absolute OpenGraph/Twitter URLs. Update when the real domain is registered.
export const SITE_URL = "https://notifyme.example";

export const GITHUB_URL = "https://github.com/lbj96347/notifyme";
export const DOCS_URL = "https://github.com/lbj96347/notifyme#quick-start";
export const LICENSE_URL = "https://github.com/lbj96347/notifyme/blob/main/LICENSE";

// Sibling products surfaced in the footer.
export const WHISKEY_URL = "https://whiskey.asktobuild.app/";
export const TOKKONG_URL = "https://tokkong.forthrighttech.com/";
export const LOUNGE_URL = "https://lounge.asktobuild.app/";

export const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Examples", href: "/#examples" },
  { label: "Self-hosted", href: "/#open-source" },
  { label: "Blog", href: "/blog" },
];

export type CodeExample = {
  id: string;
  label: string;
  blurb: string;
  language: string;
  code: string;
};

export const WEBHOOK_PLACEHOLDER =
  "https://us-central1-YOUR_PROJECT.cloudfunctions.net/webhook/YOUR_TOKEN";

export const EXAMPLES: CodeExample[] = [
  {
    id: "bash",
    label: "Bash / curl",
    blurb:
      "The whole contract is one POST. Trap errors and notify on both outcomes — the status color reflects how the job ended.",
    language: "bash",
    code: `#!/usr/bin/env bash
set -euo pipefail

notify() {  # notify <status> <title> <message> [url]
  curl -fsS -X POST "$NOTIFYME_URL" \\
    -H "Content-Type: application/json" \\
    -d "$(jq -n \\
      --arg t "$2" --arg m "$3" --arg s "$1" --arg u "\${4:-}" \\
      '{title:$t, message:$m, category:"cron", status:$s, url:$u}')" \\
    >/dev/null || echo "notifyme: send failed" >&2
}

trap 'notify error "Backup failed" "Exited at line $LINENO"' ERR

# ---- your long-running job ----
pg_dump app | gzip > /backups/app.sql.gz
# -------------------------------

notify success "Backup complete" "Nightly snapshot finished in 4m12s"`,
  },
  {
    id: "claude-code",
    label: "Claude Code",
    blurb:
      "Fire a notification from a Stop hook when a session ends — no wrapper script needed. Export NOTIFYME_URL in the shell Claude Code runs in.",
    language: "json",
    code: `// .claude/settings.json
{
  "hooks": {
    "Stop": [{
      "hooks": [{
        "type": "command",
        "command": "curl -fsS -X POST \\"$NOTIFYME_URL\\" -H 'Content-Type: application/json' -d '{\\"title\\":\\"Claude Code session ended\\",\\"message\\":\\"Your agent run has stopped.\\",\\"category\\":\\"claude\\",\\"status\\":\\"info\\"}'"
      }]
    }]
  }
}`,
  },
  {
    id: "codex-cli",
    label: "Codex CLI",
    blurb:
      "Run Codex non-interactively and notify with the status that matches the outcome — green when the suite is clean, red when it isn't.",
    language: "bash",
    code: `#!/usr/bin/env bash
set -euo pipefail

trap 'curl -fsS -X POST "$NOTIFYME_URL" -H "Content-Type: application/json" \\
  -d "{\\"title\\":\\"Codex failed\\",\\"message\\":\\"Run exited at line $LINENO\\",\\"category\\":\\"codex\\",\\"status\\":\\"error\\"}"' ERR

codex exec "Implement the API client in src/, then run the test suite."

curl -fsS -X POST "$NOTIFYME_URL" \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Codex finished","message":"Task done and tests are green","category":"codex","status":"success","url":"https://github.com/me/repo/pull/42"}'`,
  },
  {
    id: "github-actions",
    label: "GitHub Actions",
    blurb:
      "Store the URL as a repo secret, then gate two steps on the job outcome so exactly one fires — tap it to jump straight to the run logs.",
    language: "yaml",
    code: `      - name: Notify success
        if: success()
        run: |
          curl -fsS -X POST "$NOTIFYME_URL" \\
            -H "Content-Type: application/json" \\
            -d '{
              "title": "✅ CI passed",
              "message": "'"$GITHUB_WORKFLOW"' on '"$GITHUB_REF_NAME"'",
              "category": "github-actions",
              "status": "success",
              "url": "'"$RUN_URL"'"
            }'
        env:
          NOTIFYME_URL: \${{ secrets.NOTIFYME_URL }}
          RUN_URL: \${{ github.server_url }}/\${{ github.repository }}/actions/runs/\${{ github.run_id }}

      - name: Notify failure
        if: failure()
        run: |
          curl -fsS -X POST "$NOTIFYME_URL" \\
            -H "Content-Type: application/json" \\
            -d '{"title":"❌ CI failed","message":"'"$GITHUB_WORKFLOW"' on '"$GITHUB_REF_NAME"'","category":"github-actions","status":"error","url":"'"$RUN_URL"'"}'
        env:
          NOTIFYME_URL: \${{ secrets.NOTIFYME_URL }}
          RUN_URL: \${{ github.server_url }}/\${{ github.repository }}/actions/runs/\${{ github.run_id }}`,
  },
  {
    id: "n8n",
    label: "n8n",
    blurb:
      "Add an HTTP Request node (POST, JSON body) at the end of any workflow. n8n evaluates {{ }} expressions inside the body, so you can pull values from the run.",
    language: "json",
    code: `// HTTP Request → POST {{ $vars.NOTIFYME_URL }}  ·  Body: JSON
{
  "title": "n8n: {{ $workflow.name }}",
  "message": "Processed {{ $json.count }} records for {{ $json.customer }}",
  "category": "n8n",
  "status": "success",
  "url": "{{ $execution.url }}"
}`,
  },
  {
    id: "crawler",
    label: "Crawler",
    blurb:
      "Ping yourself when a long scrape finishes — pass the page count through and use info (blue) for a clean run, error (red) on a crash.",
    language: "python",
    code: `import os, requests

NOTIFYME_URL = os.environ["NOTIFYME_URL"]

def notify(title, message, status="info", url=None):
    requests.post(NOTIFYME_URL, json={
        "title": title, "message": message,
        "category": "crawler", "status": status, "url": url,
    }, timeout=10)

try:
    pages = run_spider()  # your scrape
    notify("Crawl finished", f"{pages:,} pages indexed", "info")
except Exception as e:
    notify("Crawl crashed", str(e)[:200], "error")
    raise`,
  },
  {
    id: "monitor",
    label: "Status monitor",
    blurb:
      "Drop this in cron (e.g. every 5 min). It only pings when an endpoint goes down — warning (yellow) on a bad status code, error (red) when it's unreachable.",
    language: "bash",
    code: `#!/usr/bin/env bash
# crontab: */5 * * * * /opt/checks/uptime.sh
TARGET="https://api.example.com/health"

code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "$TARGET") || code=000

if [ "$code" = "000" ]; then
  status=error;   msg="$TARGET is unreachable"
elif [ "$code" -ge 400 ]; then
  status=warning; msg="$TARGET returned HTTP $code"
else
  exit 0  # healthy — stay quiet
fi

curl -fsS -X POST "$NOTIFYME_URL" -H "Content-Type: application/json" \\
  -d "{\\"title\\":\\"Health check failed\\",\\"message\\":\\"$msg\\",\\"category\\":\\"monitor\\",\\"status\\":\\"$status\\",\\"url\\":\\"$TARGET\\"}"`,
  },
];

export type Feature = {
  title: string;
  body: string;
  icon: string;
};

export const FEATURES: Feature[] = [
  {
    title: "Personal webhook URL",
    body: "Every user gets one unguessable POST endpoint. No app keys to juggle.",
    icon: "🔗",
  },
  {
    title: "Push via FCM",
    body: "Delivered straight to your phone through Firebase Cloud Messaging.",
    icon: "📲",
  },
  {
    title: "Inbox grouped by day",
    body: "A paged notification feed, organized so the latest is always on top.",
    icon: "🗂",
  },
  {
    title: "Status colors",
    body: "A closed set — success, error, warning, info — each maps to a color.",
    icon: "🚦",
  },
  {
    title: "Search & read state",
    body: "Find any alert and track what you've already seen.",
    icon: "🔍",
  },
  {
    title: "Tappable URLs",
    body: "Attach a url and the notification deep-links straight to the source.",
    icon: "👆",
  },
  {
    title: "Bookmarks",
    body: "Star the alerts worth keeping; they stay in a dedicated list.",
    icon: "⭐",
  },
  {
    title: "Statuspage support",
    body: "Nested Atlassian Statuspage payloads are normalized automatically.",
    icon: "📡",
  },
  {
    title: "Self-hosted Firebase",
    body: "Deploys into your own project. No central server, no shared data.",
    icon: "🔒",
  },
];

export type UseCase = {
  title: string;
  message: string;
  category: string;
  status: "success" | "error" | "warning" | "info";
};

export const USE_CASES: UseCase[] = [
  {
    title: "AI agent finished",
    message: "Claude Code completed the migration task",
    category: "claude",
    status: "success",
  },
  {
    title: "CI failed",
    message: "build #482 broke on main — 3 tests red",
    category: "github",
    status: "error",
  },
  {
    title: "n8n workflow completed",
    message: "Lead-sync processed 1,204 records",
    category: "n8n",
    status: "success",
  },
  {
    title: "Crawler done",
    message: "Scrape job finished — 38k pages indexed",
    category: "crawler",
    status: "info",
  },
  {
    title: "Statuspage incident",
    message: "Anthropic: elevated errors on Claude API",
    category: "statuspage",
    status: "warning",
  },
  {
    title: "Server monitor alert",
    message: "vps-01 disk usage crossed 90%",
    category: "monitor",
    status: "warning",
  },
];
