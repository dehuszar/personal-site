provider "cloudflare" {
  # Using env vars
}

resource "cloudflare_zone" "domain" {
  plan = "free"
  zone = var.domain
}

resource "cloudflare_record" "static_site" {
  zone_id = cloudflare_zone.domain.id
  name    = var.domain
  value   = var.bucket_cname
  type    = "CNAME"
  ttl     = 3600
}