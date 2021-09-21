provider "github" {
  # Using envs for config
}

resource "github_repository" "r" {
  archive_on_destroy = true
  name        = "personal-site"
  description = "My Personal Site"
  gitignore_template = "Terraform"
  has_downloads = false
  homepage_url = var.domain
  license_template = "unlicense"
  visibility = "public"
  vulnerability_alerts = true
}