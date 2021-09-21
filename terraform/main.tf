terraform {
  required_providers {
    cloudflare = {
      source = "cloudflare/cloudflare"
    }

    github = {
      source = "integrations/github"
    }
    
    tfe = {
      source = "hashicorp/tfe"
    }
  }
}

variable "bucket_cname" {
  type = string
}

variable "domain" {
  type = string  
}