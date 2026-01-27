# 🧪 Swag Labs QA Automation Suite

This repository contains automated test cases for [Swag Labs](https://www.saucedemo.com/) using **Playwright**.  
The suite focuses on critical user flows such as authentication, product sorting, and checkout.

---

##  Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## 📦 Install & Run Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/sunnysuri98/Playwright-E2E-Automation-Swag-Labs.git
   cd Playwright-E2E-Automation-Swag-Labs

2. **Install dependencies**

   ```bash
   npm install

3. **Run all tests**

    ```bash
    npx playwright test
4. **Run tests in UI mode**

    ```bash
    npx playwright test --ui
5. **Generate HTML report**

    ```bash
    npx playwright show-report


# ✅ Coverage Summary

This suite currently covers the following critical flows:

## Authentication

- Positive login with valid credentials  
- Negative login with invalid credentials  

## Product Sorting

- Price sorting in ascending order  
- Price sorting in descending order  

## Checkout Workflow

- Add 2 products to cart  
- Complete checkout flow  
- Assert final subtotal price matches expected sum  

# 🔮 Future Improvements

- Extend coverage to cart edge cases (empty cart checkout, removing items)
- Integrate with CI/CD pipeline (GitHub Actions)  
- Add negative workflow tests (e.g., incomplete checkout, invalid form inputs)  

# 📌 Assumptions

- Swag Labs demo site remains stable and accessible during test execution  
- Test data (user credentials, product prices) are consistent across sessions  
- Each test leverages Playwright’s `{page}` fixture to ensure isolation, reproducibility, and simplified setup/teardown  
- Network latency stays within acceptable limits for Playwright’s built-in auto-waiting mechanisms  

# 🛡️ Stability Strategies

To minimize flakiness and ensure reliable execution:

- **Locator strategy:** Prefer `getByRole`, `getByText`, and `data-test` attributes. When using XPath, anchor it to stable attributes instead of brittle DOM paths.
- **Explicit waits:** Use Playwright’s auto-waiting instead of manual `waitForTimeout`  
- **Retry logic:** Critical flows configured with retries in CI to handle transient failures  
- **Test isolation:** Each test leverages Playwright’s `{page}` fixture to guarantee a clean, isolated environment. This prevents state leakage between tests and ensures reproducibility without manual browser context management.
- **Logging & reporting:** HTML reports generated for visibility; console logs kept minimal and meaningful  

# 📊 Reporting

Playwright’s built-in HTML report is enabled. Reports include:

- Pass/fail status
- Screenshots on failure
- Traces
- Html content
