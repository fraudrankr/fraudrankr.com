---
title: Fraudrankr - Get started
---

# Get Started

To use Fraudrankr you’ll need to send us only two things:

* Your transaction details
* And you’ll need to tell us about your chargebacks

This is all we need in order to identify and predict fraud and chargebacks.

## How to score a transaction

```bash
echo '{
  "apikey": "<apikey>",
  "user_id": "1234",
  "user_ip": "219.231.41.48",
  "transaction_id": "ab1cd2-1234-5678",
  "label": "sale",
  "amount": 25000,
  "currency": "EUR",
  "card": {
    "bin": 411111,
    "last4": 1234,
    "name_on_card": "John Doe"
  }
}' | curl -X POST -d - https://c.fraudrankr.com/transactions
```

Read our [API docs](http://docs.fraudrankr.com/) to see more on how to get
started with Fraudrankr.

