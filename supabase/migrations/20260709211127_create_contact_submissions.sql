-- Contact / early-access requests submitted from the public landing page form.
-- Public-facing, unauthenticated form: anon may INSERT only. No SELECT, UPDATE,
-- or DELETE grant for anon/authenticated, so a submission can never be read
-- back, edited, or removed through the public API key once written.

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text not null,
  message text
);

alter table public.contact_submissions enable row level security;

create policy "anon can insert contact submissions"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

-- Explicit least-privilege grant: insert only, nothing else. RLS above is the
-- row-level gate; this is the table-level grant the Data API also checks.
grant insert on public.contact_submissions to anon;
