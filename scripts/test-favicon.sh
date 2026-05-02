#!/bin/bash

# Favicon Testing Script
# Tests favicon accessibility and configuration

set -e

URL="${1:-http://localhost:4173}"
VERBOSE="${2:-false}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
print_header() {
  echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${BLUE}  $1${NC}"
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
}

print_test() {
  echo -e "${BLUE}→${NC} Testing: $1"
}

print_pass() {
  echo -e "${GREEN}✓${NC} $1"
}

print_fail() {
  echo -e "${RED}✗${NC} $1"
}

print_warn() {
  echo -e "${YELLOW}⚠${NC} $1"
}

# Check if URL is accessible
check_url_accessible() {
  local status=$(curl -s -o /dev/null -w "%{http_code}" "$URL" --connect-timeout 5)
  if [ "$status" != "000" ]; then
    return 0
  else
    return 1
  fi
}

# Test favicon access
test_favicon() {
  print_test "favicon.ico access"
  
  local status=$(curl -s -o /dev/null -w "%{http_code}" "$URL/favicon.ico" --connect-timeout 5)
  local mime_type=$(curl -s -I "$URL/favicon.ico" 2>/dev/null | grep -i "Content-Type" | awk '{print $2}' | tr -d '\r')
  local content_length=$(curl -s -I "$URL/favicon.ico" 2>/dev/null | grep -i "Content-Length" | awk '{print $2}' | tr -d '\r')
  
  if [ "$status" == "200" ]; then
    print_pass "HTTP Status: 200"
    echo -e "   MIME Type: ${mime_type:-unknown}"
    echo -e "   Size: ${content_length:-unknown} bytes"
  else
    print_fail "HTTP Status: $status (expected 200)"
    return 1
  fi
}

# Test apple touch icon
test_apple_icon() {
  print_test "apple-touch-icon.png (optional)"
  
  local status=$(curl -s -o /dev/null -w "%{http_code}" "$URL/apple-touch-icon.png" --connect-timeout 5)
  
  if [ "$status" == "200" ]; then
    print_pass "apple-touch-icon.png found (HTTP 200)"
  else
    print_warn "apple-touch-icon.png not found (HTTP $status)"
  fi
}

# Test site webmanifest
test_manifest() {
  print_test "site.webmanifest (optional)"
  
  local status=$(curl -s -o /dev/null -w "%{http_code}" "$URL/site.webmanifest" --connect-timeout 5)
  
  if [ "$status" == "200" ]; then
    print_pass "site.webmanifest found (HTTP 200)"
  else
    print_warn "site.webmanifest not found (HTTP $status)"
  fi
}

# Test HTML references
test_html_references() {
  print_test "HTML favicon references"
  
  local html=$(curl -s "$URL" --connect-timeout 5)
  
  if echo "$html" | grep -q 'rel="icon".*href="/favicon.ico"'; then
    print_pass "favicon.ico link found in HTML"
  else
    print_warn "favicon.ico link not found in HTML (check index.html)"
  fi
  
  if echo "$html" | grep -q 'rel="apple-touch-icon"'; then
    print_pass "apple-touch-icon link found in HTML"
  else
    print_warn "apple-touch-icon link not found in HTML"
  fi
  
  if echo "$html" | grep -q 'name="theme-color"'; then
    print_pass "theme-color meta tag found"
  else
    print_warn "theme-color meta tag not found"
  fi
}

# Test favicon in DevTools console
test_console_errors() {
  print_test "Console 404 errors"
  echo -e "   Note: Manual check required in browser DevTools"
  print_warn "Use browser DevTools Console tab to verify no favicon 404 errors"
}

# Main execution
main() {
  print_header "📁 Favicon Testing Script"
  echo "Testing URL: $URL"
  echo "Time: $(date)"
  
  # Check if URL is accessible
  if ! check_url_accessible; then
    print_fail "Cannot reach $URL"
    echo -e "\nEnsure the server is running:"
    echo "  npm run dev     (for development)"
    echo "  npm run preview (after npm run build)"
    exit 1
  fi
  
  print_header "Running Tests"
  
  # Run tests
  local all_passed=true
  
  test_favicon || all_passed=false
  echo ""
  
  test_apple_icon
  echo ""
  
  test_manifest
  echo ""
  
  test_html_references
  echo ""
  
  test_console_errors
  
  # Results
  print_header "Test Summary"
  
  if [ "$all_passed" = true ]; then
    echo -e "${GREEN}✓ Favicon setup appears to be correct!${NC}\n"
    echo "Next steps:"
    echo "  1. Open browser DevTools (F12)"
    echo "  2. Check Console tab for any favicon 404 errors"
    echo "  3. Check Network tab and filter by 'favicon'"
    echo "  4. Verify status is 200 and not 404"
    echo ""
  else
    echo -e "${RED}✗ Some tests failed. See above for details.${NC}\n"
    echo "Troubleshooting:"
    echo "  1. Verify public/favicon.ico exists"
    echo "  2. Run 'npm run build' to rebuild"
    echo "  3. Check vite.config.ts publicDir setting"
    echo "  4. For detailed help: read FAVICON_TROUBLESHOOTING_GUIDE.md"
    echo ""
  fi
}

# Run main function
main
