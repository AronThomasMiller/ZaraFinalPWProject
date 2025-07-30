# Zara Final Project

## Overview
This project is an automated testing suite for the Zara e-commerce website using Playwright. It includes various page object models to encapsulate the interactions with the website and a set of tests to validate the functionality of the site.

## Project Structure
```
ZaraFinalPWProject
├── pages
│   ├── BasePage.ts
│   ├── HeaderComponent.ts
│   ├── RegistrationPage.ts
│   ├── SearchComponent.ts
│   └── SearchResultPage.ts
├── tests
│   ├── Zara.spec.ts
│   └── zara.spec.ts
├── playwright.config.ts
└── README.md
```

## Pages
- **BasePage.ts**: This file exports the `BasePage` class, which serves as a base class for other page classes. It initializes the page property with a Playwright Page instance.
  
- **HeaderComponent.ts**: This file exports the `HeaderComponent` class, extending `BasePage`. It contains locators for the cart amount and methods to retrieve and verify the cart amount.

- **RegistrationPage.ts**: This file exports the `RegistrationPage` class, which extends `BasePage`. It includes locators for input fields and buttons related to user registration, along with methods to fill the registration form, submit it, and check for error messages.

- **SearchComponent.ts**: This file exports the `SearchComponent` class, extending `BasePage`. It contains locators for the search box and search link, with methods to search for a product and click the search link.

- **SearchResultPage.ts**: This file exports the `SearchResultPage` class, extending `BasePage`. It includes locators for size selectors and plus buttons, along with methods to wait for plus buttons, get their count, and add items with multiple sizes to the cart.

## Tests
- **Zara.spec.ts**: This file contains the test suite for the Zara application. It automates browser interactions using Playwright, including navigating to the site, searching for products, adding items to the cart, and testing the registration process.

## Configuration
- **playwright.config.ts**: This file is the configuration for Playwright, specifying the test directory, parallel execution settings, retries, reporters, and browser configurations.

## Getting Started
1. Clone the repository.
2. Install the necessary dependencies using npm or yarn.
3. Run the tests using the Playwright test runner.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.