$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bankcustomer/bankCustomerLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Bank customer login",
  "description": "",
  "id": "bank-customer-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Bank customer login successfully",
  "description": "",
  "id": "bank-customer-login;bank-customer-login-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click username as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify that customer login successfully with name as \u003cusername\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "bank-customer-login;bank-customer-login-successfully;",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 15,
      "id": "bank-customer-login;bank-customer-login-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter"
      ],
      "line": 16,
      "id": "bank-customer-login;bank-customer-login-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 8194869100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Bank customer login successfully",
  "description": "",
  "id": "bank-customer-login;bank-customer-login-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click username as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify that customer login successfully with name as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    }
  ],
  "location": "BankCustomerLoginTest.clickUsername(String)"
});
formatter.result({
  "duration": 2198018800,
  "status": "passed"
});
formatter.match({
  "location": "BankCustomerLoginTest.clickCustomerLoginButton()"
});
formatter.result({
  "duration": 2124285900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 55
    }
  ],
  "location": "BankCustomerLoginTest.verifyCustomerLoginSuccessfully(String)"
});
formatter.result({
  "duration": 5043712700,
  "status": "passed"
});
formatter.uri("bankcustomer/customerDeposit.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Customer deposit",
  "description": "",
  "id": "customer-deposit",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Deposit successfully",
  "description": "",
  "id": "customer-deposit;deposit-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type deposit amount as \u003camount\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify add deposit successfully with amount as \u003camount\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "customer-deposit;deposit-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "amount"
      ],
      "line": 17,
      "id": "customer-deposit;deposit-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "2000"
      ],
      "line": 18,
      "id": "customer-deposit;deposit-successfully;;2"
    },
    {
      "cells": [
        "Harry Potter",
        "2000"
      ],
      "line": 19,
      "id": "customer-deposit;deposit-successfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6813923600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Deposit successfully",
  "description": "",
  "id": "customer-deposit;deposit-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type deposit amount as 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify add deposit successfully with amount as 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 29
    }
  ],
  "location": "CommonTest.loginSuccessfully(String)"
});
formatter.result({
  "duration": 10327761500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositTest.clickDepositTab()"
});
formatter.result({
  "duration": 6169388300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 25
    }
  ],
  "location": "CustomerDepositTest.setAmount(String)"
});
formatter.result({
  "duration": 7383533800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositTest.clickDepositButton()"
});
formatter.result({
  "duration": 4183171000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 49
    }
  ],
  "location": "CustomerDepositTest.verifyAddDepositSuccessfully(String)"
});
formatter.result({
  "duration": 16555235800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1061287600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Deposit successfully",
  "description": "",
  "id": "customer-deposit;deposit-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type deposit amount as 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify add deposit successfully with amount as 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 29
    }
  ],
  "location": "CommonTest.loginSuccessfully(String)"
});
formatter.result({
  "duration": 10280604800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositTest.clickDepositTab()"
});
formatter.result({
  "duration": 6188835700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 25
    }
  ],
  "location": "CustomerDepositTest.setAmount(String)"
});
formatter.result({
  "duration": 7190504700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositTest.clickDepositButton()"
});
formatter.result({
  "duration": 4112154000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 49
    }
  ],
  "location": "CustomerDepositTest.verifyAddDepositSuccessfully(String)"
});
formatter.result({
  "duration": 16569556800,
  "status": "passed"
});
formatter.uri("bankcustomer/customerWithdrawl.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Customer withdrawal",
  "description": "",
  "id": "customer-withdrawal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Customer withdrawal successfully",
  "description": "",
  "id": "customer-withdrawal;customer-withdrawal-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as \u003cdepositamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click withdrawal tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type withdrawal amount as \u003camount\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click withdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify withdrawal successfully with amount as \u003camount\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "customer-withdrawal;customer-withdrawal-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "amount",
        "depositamount"
      ],
      "line": 18,
      "id": "customer-withdrawal;customer-withdrawal-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "2000",
        "4000"
      ],
      "line": 19,
      "id": "customer-withdrawal;customer-withdrawal-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 7890336800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Customer withdrawal successfully",
  "description": "",
  "id": "customer-withdrawal;customer-withdrawal-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as 4000",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click withdrawal tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type withdrawal amount as 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click withdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify withdrawal successfully with amount as 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 29
    }
  ],
  "location": "CommonTest.loginSuccessfully(String)"
});
formatter.result({
  "duration": 10302117700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 38
    }
  ],
  "location": "CommonTest.depositSuccessfully(String)"
});
formatter.result({
  "duration": 11461257100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerWithdrawalTest.clickWithdrawTab()"
});
formatter.result({
  "duration": 6163492200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 28
    }
  ],
  "location": "CustomerWithdrawalTest.setWithdrawalAmount(String)"
});
formatter.result({
  "duration": 7260769500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerWithdrawalTest.clickDepositButton()"
});
formatter.result({
  "duration": 4120283600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 48
    }
  ],
  "location": "CustomerWithdrawalTest.verifyAddWithdrawalSuccessfully(String)"
});
formatter.result({
  "duration": 16544816200,
  "status": "passed"
});
formatter.uri("bankcustomer/resetTransaction.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Reset transaction",
  "description": "",
  "id": "reset-transaction",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Reset transaction successfully",
  "description": "",
  "id": "reset-transaction;reset-transaction-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as \u003cdepositamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I withdrawal successfully with amount as \u003cwithdrawalamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click transactions tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click reset button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify reset transactions successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "reset-transaction;reset-transaction-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "depositamount",
        "withdrawalamount"
      ],
      "line": 18,
      "id": "reset-transaction;reset-transaction-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "4000",
        "2000"
      ],
      "line": 19,
      "id": "reset-transaction;reset-transaction-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 8209206900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Reset transaction successfully",
  "description": "",
  "id": "reset-transaction;reset-transaction-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as 4000",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I withdrawal successfully with amount as 2000",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click transactions tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click reset button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify reset transactions successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 29
    }
  ],
  "location": "CommonTest.loginSuccessfully(String)"
});
formatter.result({
  "duration": 10313967800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 38
    }
  ],
  "location": "CommonTest.depositSuccessfully(String)"
});
formatter.result({
  "duration": 11456548100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 41
    }
  ],
  "location": "CommonTest.withdrawalSucessfully(String)"
});
formatter.result({
  "duration": 15443001500,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickTransactionTab()"
});
formatter.result({
  "duration": 4112523000,
  "status": "passed"
});
formatter.match({
  "location": "ResetTransactionTest.clickResetButton()"
});
formatter.result({
  "duration": 4100079200,
  "status": "passed"
});
formatter.match({
  "location": "ResetTransactionTest.verifyResetTransactionSuccessfully()"
});
formatter.result({
  "duration": 4064312800,
  "status": "passed"
});
formatter.uri("bankcustomer/sortTransaction.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Sort transaction",
  "description": "",
  "id": "sort-transaction",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Sort transaction successfully",
  "description": "",
  "id": "sort-transaction;sort-transaction-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as \u003cdepositamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I withdrawal successfully with amount as \u003cwithdrawalamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click transactions tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click date time sort",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify sort transactions successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "sort-transaction;sort-transaction-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "depositamount",
        "withdrawalamount"
      ],
      "line": 18,
      "id": "sort-transaction;sort-transaction-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "4000",
        "2000"
      ],
      "line": 19,
      "id": "sort-transaction;sort-transaction-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6950725900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Sort transaction successfully",
  "description": "",
  "id": "sort-transaction;sort-transaction-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as 4000",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I withdrawal successfully with amount as 2000",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click transactions tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click date time sort",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify sort transactions successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 29
    }
  ],
  "location": "CommonTest.loginSuccessfully(String)"
});
formatter.result({
  "duration": 10238401900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 38
    }
  ],
  "location": "CommonTest.depositSuccessfully(String)"
});
formatter.result({
  "duration": 11460416300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 41
    }
  ],
  "location": "CommonTest.withdrawalSucessfully(String)"
});
formatter.result({
  "duration": 15467900000,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickTransactionTab()"
});
formatter.result({
  "duration": 4098429300,
  "status": "passed"
});
formatter.match({
  "location": "TransactionSortTest.clickDateTimeSort()"
});
formatter.result({
  "duration": 3250059700,
  "status": "passed"
});
formatter.match({
  "location": "TransactionSortTest.verifySortTransactionSuccessfully()"
});
formatter.result({
  "duration": 2133265000,
  "status": "passed"
});
formatter.uri("bankcustomer/transaction.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Customer transaction",
  "description": "",
  "id": "customer-transaction",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Customer transaction successfully",
  "description": "",
  "id": "customer-transaction;customer-transaction-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as \u003cdepositamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I withdrawal successfully with amount as \u003cwithdrawalamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click transactions tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify transactions successfully with deposit amount as \u003cdepositamount\u003e and withdrawal amount as \u003cwithdrawalamount\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "customer-transaction;customer-transaction-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "depositamount",
        "withdrawalamount"
      ],
      "line": 17,
      "id": "customer-transaction;customer-transaction-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "4000",
        "2000"
      ],
      "line": 18,
      "id": "customer-transaction;customer-transaction-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6876689300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Customer transaction successfully",
  "description": "",
  "id": "customer-transaction;customer-transaction-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as 4000",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I withdrawal successfully with amount as 2000",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click transactions tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify transactions successfully with deposit amount as 4000 and withdrawal amount as 2000",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 29
    }
  ],
  "location": "CommonTest.loginSuccessfully(String)"
});
formatter.result({
  "duration": 10282271400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 38
    }
  ],
  "location": "CommonTest.depositSuccessfully(String)"
});
formatter.result({
  "duration": 11397395100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 41
    }
  ],
  "location": "CommonTest.withdrawalSucessfully(String)"
});
formatter.result({
  "duration": 15523120100,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickTransactionTab()"
});
formatter.result({
  "duration": 4106786800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 58
    },
    {
      "val": "2000",
      "offset": 88
    }
  ],
  "location": "TransactionTest.verifyTransactionsSuccessfully(String,String)"
});
formatter.result({
  "duration": 2264279400,
  "status": "passed"
});
formatter.uri("bankmanager/addCustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Add customer",
  "description": "",
  "id": "add-customer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Add customer successfully",
  "description": "",
  "id": "add-customer;add-customer-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I input first name as \u003cfirstname\u003e, last name as \u003clastname\u003e and post code as \u003cpostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as \u003cfullname\u003e successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "add-customer;add-customer-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "fullname"
      ],
      "line": 14,
      "id": "add-customer;add-customer-successfully;;1"
    },
    {
      "cells": [
        "thao",
        "ngo",
        "550000",
        "thao ngo"
      ],
      "line": 15,
      "id": "add-customer;add-customer-successfully;;2"
    },
    {
      "cells": [
        "\u003chtml\u003ethao\u003c/html\u003e",
        "\u003cscript\u003engo\u003c/scrip\u003e",
        "550000",
        "\u003chtml\u003ethao\u003c/html\u003e \u003cscript\u003engo\u003c/scrip\u003e"
      ],
      "line": 16,
      "id": "add-customer;add-customer-successfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 7047684900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add customer successfully",
  "description": "",
  "id": "add-customer;add-customer-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I input first name as thao, last name as ngo and post code as 550000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as thao ngo successfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6108258000,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickAddCustomerTab()"
});
formatter.result({
  "duration": 1083293600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao",
      "offset": 22
    },
    {
      "val": "ngo",
      "offset": 41
    },
    {
      "val": "550000",
      "offset": 62
    }
  ],
  "location": "AddCustomerTest.setUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3491287100,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 5141251800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao ngo",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyAddCustomerSuccessfully(String)"
});
formatter.result({
  "duration": 18334741400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1049574000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Add customer successfully",
  "description": "",
  "id": "add-customer;add-customer-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I input first name as \u003chtml\u003ethao\u003c/html\u003e, last name as \u003cscript\u003engo\u003c/scrip\u003e and post code as 550000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as \u003chtml\u003ethao\u003c/html\u003e \u003cscript\u003engo\u003c/scrip\u003e successfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6126515200,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickAddCustomerTab()"
});
formatter.result({
  "duration": 1130691400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003chtml\u003ethao\u003c/html\u003e",
      "offset": 22
    },
    {
      "val": "\u003cscript\u003engo\u003c/scrip\u003e",
      "offset": 54
    },
    {
      "val": "550000",
      "offset": 91
    }
  ],
  "location": "AddCustomerTest.setUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3617720000,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 5081484600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003chtml\u003ethao\u003c/html\u003e \u003cscript\u003engo\u003c/scrip\u003e",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyAddCustomerSuccessfully(String)"
});
formatter.result({
  "duration": 18356512900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Add customer unsuccessfully without first name, last name or post code",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully-without-first-name,-last-name-or-post-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I input first name as \u003cfirstname\u003e, last name as \u003clastname\u003e and post code as \u003cpostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify that system added customer unsuccessfully with full name as \u003cfullname\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully-without-first-name,-last-name-or-post-code;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "fullname"
      ],
      "line": 26,
      "id": "add-customer;add-customer-unsuccessfully-without-first-name,-last-name-or-post-code;;1"
    },
    {
      "cells": [
        "thao",
        "",
        "550000",
        "thao"
      ],
      "line": 27,
      "id": "add-customer;add-customer-unsuccessfully-without-first-name,-last-name-or-post-code;;2"
    },
    {
      "cells": [
        "",
        "hoang",
        "550000",
        "hoang"
      ],
      "line": 28,
      "id": "add-customer;add-customer-unsuccessfully-without-first-name,-last-name-or-post-code;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1058035400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Add customer unsuccessfully without first name, last name or post code",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully-without-first-name,-last-name-or-post-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I input first name as thao, last name as  and post code as 550000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify that system added customer unsuccessfully with full name as thao",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6138865500,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickAddCustomerTab()"
});
formatter.result({
  "duration": 1121927400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao",
      "offset": 22
    },
    {
      "val": "",
      "offset": 41
    },
    {
      "val": "550000",
      "offset": 59
    }
  ],
  "location": "AddCustomerTest.setUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3464560300,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 5189341100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao",
      "offset": 69
    }
  ],
  "location": "AddCustomerTest.verifyAddCustomerUnsuccessfully(String)"
});
formatter.result({
  "duration": 9349954800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1046256700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Add customer unsuccessfully without first name, last name or post code",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully-without-first-name,-last-name-or-post-code;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I input first name as , last name as hoang and post code as 550000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify that system added customer unsuccessfully with full name as hoang",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6137740600,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickAddCustomerTab()"
});
formatter.result({
  "duration": 1127899100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    },
    {
      "val": "hoang",
      "offset": 37
    },
    {
      "val": "550000",
      "offset": 60
    }
  ],
  "location": "AddCustomerTest.setUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3481837400,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 5114398400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hoang",
      "offset": 69
    }
  ],
  "location": "AddCustomerTest.verifyAddCustomerUnsuccessfully(String)"
});
formatter.result({
  "duration": 9346136100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Add customer unsuccessfully with existed customer",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully-with-existed-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I input first name as \u003cfirstname\u003e, last name as \u003clastname\u003e and post code as \u003cpostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I verify that system can not add with customer is existed with first name as \u003cfirstname\u003e, last name as \u003clastname\u003e and post code as \u003cpostcode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully-with-existed-customer;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode"
      ],
      "line": 38,
      "id": "add-customer;add-customer-unsuccessfully-with-existed-customer;;1"
    },
    {
      "cells": [
        "Harry",
        "Potter",
        "E725JB"
      ],
      "line": 39,
      "id": "add-customer;add-customer-unsuccessfully-with-existed-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1039406200,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Add customer unsuccessfully with existed customer",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully-with-existed-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I input first name as Harry, last name as Potter and post code as E725JB",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I verify that system can not add with customer is existed with first name as Harry, last name as Potter and post code as E725JB",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6117597100,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickAddCustomerTab()"
});
formatter.result({
  "duration": 1121720100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 22
    },
    {
      "val": "Potter",
      "offset": 42
    },
    {
      "val": "E725JB",
      "offset": 66
    }
  ],
  "location": "AddCustomerTest.setUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3482132300,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 5133384800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 77
    },
    {
      "val": "Potter",
      "offset": 97
    },
    {
      "val": "E725JB",
      "offset": 121
    }
  ],
  "location": "AddCustomerTest.verifyAddCustomerUnsuccessfullyWithCustomerExisted(String,String,String)"
});
formatter.result({
  "duration": 18297588800,
  "status": "passed"
});
formatter.uri("bankmanager/bankManagerLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Login into bank management",
  "description": "",
  "id": "login-into-bank-management",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Login into bank management successfully",
  "description": "",
  "id": "login-into-bank-management;login-into-bank-management-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click bank manager login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify login into bank management successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6987389200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerLoginTest.clickBankManagerLoginButtton()"
});
formatter.result({
  "duration": 2176361500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerLoginTest.verifyLoginSuccessfully()"
});
formatter.result({
  "duration": 2001960700,
  "status": "passed"
});
formatter.uri("bankmanager/customer.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Manage customer",
  "description": "",
  "id": "manage-customer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Manage customer successfully",
  "description": "",
  "id": "manage-customer;manage-customer-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click delete button with first name as \u003cfirstname\u003e, last name as \u003clastname\u003e, post code as \u003cpostcode\u003e and account number as \u003caccountnumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify customer delete successfully with first name as \u003cfirstname\u003e, last name as \u003clastname\u003e, post code as \u003cpostcode\u003e and account number as \u003caccountnumber\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "manage-customer;manage-customer-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "accountnumber"
      ],
      "line": 16,
      "id": "manage-customer;manage-customer-successfully;;1"
    },
    {
      "cells": [
        "Harry",
        "Potter",
        "E725JB",
        "1004"
      ],
      "line": 17,
      "id": "manage-customer;manage-customer-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 7395090700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Manage customer successfully",
  "description": "",
  "id": "manage-customer;manage-customer-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click delete button with first name as Harry, last name as Potter, post code as E725JB and account number as 1004",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify customer delete successfully with first name as Harry, last name as Potter, post code as E725JB and account number as 1004",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6123638900,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 3108741400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 41
    },
    {
      "val": "Potter",
      "offset": 61
    },
    {
      "val": "E725JB",
      "offset": 82
    },
    {
      "val": "1004",
      "offset": 111
    }
  ],
  "location": "CustomerTest.clickButtonDelete(String,String,String,String)"
});
formatter.result({
  "duration": 2377574900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 57
    },
    {
      "val": "Potter",
      "offset": 77
    },
    {
      "val": "E725JB",
      "offset": 98
    },
    {
      "val": "1004",
      "offset": 127
    }
  ],
  "location": "CustomerTest.verifyDeleteCustomerSuccessfully(String,String,String,String)"
});
formatter.result({
  "duration": 2119228900,
  "status": "passed"
});
formatter.uri("bankmanager/openAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Open Account",
  "description": "In order to open account, I want to have the adding customer feature so that I can add customer easily",
  "id": "open-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Open account successfully",
  "description": "",
  "id": "open-account;open-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click open account tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I choose account as \u003cfullname\u003e and currency as \u003ccurrency\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click process button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I close popup",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify that user is already open with first name as \u003cfirstname\u003e and last name as \u003clastname\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "open-account;open-account-successfully;",
  "rows": [
    {
      "cells": [
        "fullname",
        "currency",
        "firstname",
        "lastname"
      ],
      "line": 16,
      "id": "open-account;open-account-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "Pound",
        "Harry",
        "Potter"
      ],
      "line": 17,
      "id": "open-account;open-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 7092782700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Open account successfully",
  "description": "",
  "id": "open-account;open-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click open account tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I choose account as Harry Potter and currency as Pound",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click process button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I close popup",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify that user is already open with first name as Harry and last name as Potter",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6090414900,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.clickOpenAccountTab()"
});
formatter.result({
  "duration": 4099756200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    },
    {
      "val": "Pound",
      "offset": 49
    }
  ],
  "location": "OpenAccountTest.setAccount(String,String)"
});
formatter.result({
  "duration": 6367077600,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.clickProcessButton()"
});
formatter.result({
  "duration": 4106455600,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.closePopup()"
});
formatter.result({
  "duration": 6016142100,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 3111791300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 54
    },
    {
      "val": "Potter",
      "offset": 77
    }
  ],
  "location": "OpenAccountTest.verifyOpenCustomerSuccessfully(String,String)"
});
formatter.result({
  "duration": 3187599600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Open account unsuccessfully",
  "description": "",
  "id": "open-account;open-account-unsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click open account tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I choose account as \u003cfullname\u003e and currency as \u003ccurrency\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click process button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify that user is not open without currency or full name",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "open-account;open-account-unsuccessfully;",
  "rows": [
    {
      "cells": [
        "fullname",
        "currency"
      ],
      "line": 27,
      "id": "open-account;open-account-unsuccessfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "null"
      ],
      "line": 28,
      "id": "open-account;open-account-unsuccessfully;;2"
    },
    {
      "cells": [
        "null",
        "Pound"
      ],
      "line": 29,
      "id": "open-account;open-account-unsuccessfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1059673100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Open account unsuccessfully",
  "description": "",
  "id": "open-account;open-account-unsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click open account tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I choose account as Harry Potter and currency as null",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click process button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify that user is not open without currency or full name",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6122332900,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.clickOpenAccountTab()"
});
formatter.result({
  "duration": 4111513300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    },
    {
      "val": "null",
      "offset": 49
    }
  ],
  "location": "OpenAccountTest.setAccount(String,String)"
});
formatter.result({
  "duration": 6306143000,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.clickProcessButton()"
});
formatter.result({
  "duration": 4222494500,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 3115730300,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.verifyOpenAccountUnsuccessfullyWithoutCurrency()"
});
formatter.result({
  "duration": 2001843100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1047870600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Open account unsuccessfully",
  "description": "",
  "id": "open-account;open-account-unsuccessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click open account tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I choose account as null and currency as Pound",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click process button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify that user is not open without currency or full name",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6118154800,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.clickOpenAccountTab()"
});
formatter.result({
  "duration": 4127646400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "null",
      "offset": 20
    },
    {
      "val": "Pound",
      "offset": 41
    }
  ],
  "location": "OpenAccountTest.setAccount(String,String)"
});
formatter.result({
  "duration": 6304288800,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.clickProcessButton()"
});
formatter.result({
  "duration": 4122523500,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 3114919100,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.verifyOpenAccountUnsuccessfullyWithoutCurrency()"
});
formatter.result({
  "duration": 2001682200,
  "status": "passed"
});
formatter.uri("bankmanager/searchCustomer.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Search customer",
  "description": "",
  "id": "search-customer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Search customer successfully",
  "description": "",
  "id": "search-customer;search-customer-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I input key search as \u003ckeysearch\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that system is already showed customer has \u003ckeysearch\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-customer;search-customer-successfully;",
  "rows": [
    {
      "cells": [
        "keysearch"
      ],
      "line": 16,
      "id": "search-customer;search-customer-successfully;;1"
    },
    {
      "cells": [
        "P"
      ],
      "line": 17,
      "id": "search-customer;search-customer-successfully;;2"
    },
    {
      "cells": [
        "v"
      ],
      "line": 18,
      "id": "search-customer;search-customer-successfully;;3"
    },
    {
      "cells": [
        "%"
      ],
      "line": 19,
      "id": "search-customer;search-customer-successfully;;4"
    },
    {
      "cells": [
        "*"
      ],
      "line": 20,
      "id": "search-customer;search-customer-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 7679644100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search customer successfully",
  "description": "",
  "id": "search-customer;search-customer-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I input key search as P",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that system is already showed customer has P",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6127630200,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 3105662700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P",
      "offset": 22
    }
  ],
  "location": "SearchCustomerTest.setKeySearch(String)"
});
formatter.result({
  "duration": 3291599600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P",
      "offset": 52
    }
  ],
  "location": "SearchCustomerTest.verifySearchCustomerSuccessfully(String)"
});
formatter.result({
  "duration": 2260784700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1050773500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search customer successfully",
  "description": "",
  "id": "search-customer;search-customer-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I input key search as v",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that system is already showed customer has v",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6109642600,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 3134732900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "v",
      "offset": 22
    }
  ],
  "location": "SearchCustomerTest.setKeySearch(String)"
});
formatter.result({
  "duration": 3223937000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "v",
      "offset": 52
    }
  ],
  "location": "SearchCustomerTest.verifySearchCustomerSuccessfully(String)"
});
formatter.result({
  "duration": 2200841000,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1051051600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search customer successfully",
  "description": "",
  "id": "search-customer;search-customer-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I input key search as %",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that system is already showed customer has %",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6128087700,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 3142818400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "%",
      "offset": 22
    }
  ],
  "location": "SearchCustomerTest.setKeySearch(String)"
});
formatter.result({
  "duration": 3219596100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "%",
      "offset": 52
    }
  ],
  "location": "SearchCustomerTest.verifySearchCustomerSuccessfully(String)"
});
formatter.result({
  "duration": 2157912400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1037815600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search customer successfully",
  "description": "",
  "id": "search-customer;search-customer-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I input key search as *",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that system is already showed customer has *",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6117747000,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 3140861600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "*",
      "offset": 22
    }
  ],
  "location": "SearchCustomerTest.setKeySearch(String)"
});
formatter.result({
  "duration": 3221802200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "*",
      "offset": 52
    }
  ],
  "location": "SearchCustomerTest.verifySearchCustomerSuccessfully(String)"
});
formatter.result({
  "duration": 2158896700,
  "status": "passed"
});
});