import { useState, useEffect } from "react";

// ── Drip Capital · PlaidWatch · GBS Supplies   March 6 ─────────────────────────────────────
const MONTHLY = [
  {
    "month": "Oct '25",
    "revenue": 37074,
    "expenses": 26856,
    "net": 10218,
    "lenderPayments": 2351,
    "lenderNames": [
      "ORIG CO NAME:CHASE CREDIT CRD …"
    ],
    "partial": false
  },
  {
    "month": "Nov '25",
    "revenue": 289636,
    "expenses": 86946,
    "net": 202690,
    "lenderPayments": 12979,
    "lenderNames": [
      "Ny Comm",
      "ORIG CO NAME:CHASE CREDIT CRD …"
    ],
    "partial": false
  },
  {
    "month": "Dec '25",
    "revenue": 442985,
    "expenses": 476590,
    "net": -33605,
    "lenderPayments": 64814,
    "lenderNames": [
      "AMEX EPAYMENT ACH PMT",
      "ORIG CO NAME:AMERICAN EXPRESS …",
      "AMEX EPAYMENT ACH PMT W4298",
      "AMEX EPAYMENT ACH PMT W9668",
      "AMEX EPAYMENT ACH PMT W4314"
    ],
    "partial": false
  },
  {
    "month": "Jan '26",
    "revenue": 450724,
    "expenses": 569343,
    "net": -118619,
    "lenderPayments": 209511,
    "lenderNames": [
      "WELLS FARGO CARD CCPYMT",
      "AMEX EPAYMENT ACH PMT",
      "ORIG CO NAME:Parafin Capital O…",
      "Payment to Chase card ending i…",
      "AMEX EPAYMENT RETRY PYMT",
      "Zelle payment to Loan Flex JPM…",
      "ORIG CO NAME:AMERICAN EXPRESS …",
      "Sba Eidl Loan",
      "PNC LENDING PAYMENT",
      "ORIG CO NAME:CHASE CREDIT CRD …"
    ],
    "partial": false
  },
  {
    "month": "Feb '26",
    "revenue": 349218,
    "expenses": 325610,
    "net": 23608,
    "lenderPayments": 145400,
    "lenderNames": [
      "AMEX EPAYMENT ACH PMT",
      "ORIG CO NAME:AMERICAN EXPRESS …",
      "ORIG CO NAME:Parafin Capital O…",
      "Sba Eidl Loan",
      "ORIG CO NAME:CHASE CREDIT CRD …"
    ],
    "partial": false
  },
  {
    "month": "Mar '26",
    "revenue": 973,
    "expenses": 69509,
    "net": -68536,
    "lenderPayments": 15998,
    "lenderNames": [
      "ORIG CO NAME:Parafin Capital O…",
      "ORIG CO NAME:CHASE CREDIT CRD …"
    ],
    "partial": false
  }
];

const TRANSACTIONS = [
  {
    "id": "txn_0",
    "name": "eBay",
    "amount": 146.33,
    "type": "income",
    "date": "2026-03-05T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_1",
    "name": "eBay",
    "amount": 126.28,
    "type": "income",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_2",
    "name": "CHECK",
    "amount": 3402.55,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_3",
    "name": "ORIG CO NAME:Square Inc CO ENTRY DESCR:SQ2603",
    "amount": 148.46,
    "type": "income",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Square",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_4",
    "name": "eBay",
    "amount": 197.57,
    "type": "income",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_5",
    "name": "The Ojc Fund Donation",
    "amount": 3000,
    "type": "expense",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Charities and Non-Profits",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_6",
    "name": "DDA DEBIT",
    "amount": 6263.18,
    "type": "expense",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_7",
    "name": "The Ojc Fund Donation",
    "amount": 1500,
    "type": "expense",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Charities and Non-Profits",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_8",
    "name": "eBay",
    "amount": 241.18,
    "type": "income",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_9",
    "name": "ORIG CO NAME:Parafin Capital ORIG ID:79035186",
    "amount": 13730.49,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": true,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_10",
    "name": "eBay",
    "amount": 113.55,
    "type": "income",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_11",
    "name": "CHECK",
    "amount": 50,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_12",
    "name": "CHECK # 2042",
    "amount": 14890,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_13",
    "name": "CHECK # 2041",
    "amount": 19705,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_14",
    "name": "Online Transfer to CHK ...8587 transaction#: ",
    "amount": 4500,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Internal Account Transfer",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_15",
    "name": "ORIG CO NAME:CHASE CREDIT CRD ORIG ID:4760039",
    "amount": 2268,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": true,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_16",
    "name": "CHECK # 2040",
    "amount": 200.01,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_17",
    "name": "IOD INTEREST PAID",
    "amount": 0.06,
    "type": "income",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Interest Earned",
    "lenderFlag": false,
    "account": "Business Money Market",
    "variance": "normal"
  },
  {
    "id": "txn_18",
    "name": "eBay",
    "amount": 36.21,
    "type": "income",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_19",
    "name": "Unishippers",
    "amount": 5771.59,
    "type": "expense",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Service",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_20",
    "name": "ORIG CO NAME:AMAZON.COM.CA UL ORIG ID:9978170",
    "amount": 262.95,
    "type": "income",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Payroll",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_21",
    "name": "eBay",
    "amount": 150.57,
    "type": "income",
    "date": "2026-02-25T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_22",
    "name": "PAYONEER 7362 EDI PAYMNT",
    "amount": 33099.58,
    "type": "income",
    "date": "2026-02-24T18:29:50.000Z",
    "category": "Shops",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_23",
    "name": "AMEX EPAYMENT ACH PMT",
    "amount": 5763.68,
    "type": "expense",
    "date": "2026-02-24T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": true,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_24",
    "name": "eBay",
    "amount": 240.33,
    "type": "income",
    "date": "2026-02-24T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_25",
    "name": "CHECK",
    "amount": 13016.28,
    "type": "expense",
    "date": "2026-02-24T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_26",
    "name": "eBay",
    "amount": 664.13,
    "type": "income",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_27",
    "name": "Online Transfer to CHK ...5536 transaction#: ",
    "amount": 3000,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Internal Account Transfer",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_28",
    "name": "ORIG CO NAME:CITIZENSBANK NA ORIG ID:25814938",
    "amount": 2447.2,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Service",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_29",
    "name": "ORIG CO NAME:AMERICAN EXPRESS ORIG ID:2005032",
    "amount": 20000,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": true,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_30",
    "name": "Online Transfer to CHK ...8587 transaction#: ",
    "amount": 700,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Internal Account Transfer",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_31",
    "name": "Unishippers",
    "amount": 5848.58,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Service",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_32",
    "name": "ORIG CO NAME:Parafin Capital ORIG ID:79035186",
    "amount": 13637.92,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": true,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_33",
    "name": "ORIG CO NAME:AMERICAN EXPRESS ORIG ID:2005032",
    "amount": 15000,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": true,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_34",
    "name": "eBay",
    "amount": 43.21,
    "type": "income",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_35",
    "name": "ORIG CO NAME:Square Inc ORIG ID:9424300002 DE",
    "amount": 14.85,
    "type": "income",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Square",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_36",
    "name": "Online Transfer to CHK ...3873 transaction#: ",
    "amount": 500,
    "type": "expense",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Internal Account Transfer",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_37",
    "name": "ORIG CO NAME:AMAZON.CM0C549HP ORIG ID:3215240",
    "amount": 117533.56,
    "type": "income",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Shops",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_38",
    "name": "TO CHECKING 4021526551",
    "amount": 5000,
    "type": "expense",
    "date": "2026-02-19T18:29:50.000Z",
    "category": "Internal Account Transfer",
    "lenderFlag": false,
    "account": "Business Money Market",
    "variance": "normal"
  },
  {
    "id": "txn_39",
    "name": "eBay",
    "amount": 987.54,
    "type": "income",
    "date": "2026-02-19T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_40",
    "name": "Mazda Financial",
    "amount": 572.22,
    "type": "expense",
    "date": "2026-02-19T18:29:50.000Z",
    "category": "Car Dealers and Leasing",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_41",
    "name": "FROM CHECKING 4032993415",
    "amount": 5000,
    "type": "income",
    "date": "2026-02-19T18:29:50.000Z",
    "category": "Internal Account Transfer",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_42",
    "name": "eBay",
    "amount": 40.38,
    "type": "income",
    "date": "2026-02-18T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_43",
    "name": "Online Transfer to CHK ...8587 transaction#: ",
    "amount": 4500,
    "type": "expense",
    "date": "2026-02-18T18:29:50.000Z",
    "category": "Internal Account Transfer",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_44",
    "name": "CHECK # 2033",
    "amount": 2398,
    "type": "expense",
    "date": "2026-02-18T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_45",
    "name": "WIRE TRANSFER FEES",
    "amount": 30,
    "type": "expense",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Wire",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_46",
    "name": "WIRE TRANSFER FEES",
    "amount": 30,
    "type": "expense",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Wire",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_47",
    "name": "Benefi",
    "amount": 5000,
    "type": "expense",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Shops",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_48",
    "name": "BENEFICIARY NAME : DRIP CAPITAL, INC. ORIG TO",
    "amount": 2908.4,
    "type": "expense",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_49",
    "name": "Online Transfer from CHK ...8587 transaction#",
    "amount": 1000.6,
    "type": "income",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Internal Account Transfer",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_50",
    "name": "Online Transfer from CHK ...3873 transaction#",
    "amount": 1000.5,
    "type": "income",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Internal Account Transfer",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_51",
    "name": "ORIG CO NAME:Parafin Capital ORIG ID:79035186",
    "amount": 13096.99,
    "type": "expense",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": true,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_52",
    "name": "DOMESTIC INCOMING WIRE FEE",
    "amount": 15,
    "type": "expense",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Wire",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_53",
    "name": "ORIG CO NAME:AMAZON.CVZRYOV6R ORIG ID:3215240",
    "amount": 11146.46,
    "type": "income",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Shops",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_54",
    "name": "FEDWIRE CREDIT VIA: CITIZENS BANK, NA/0115001",
    "amount": 5000,
    "type": "income",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Wire",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_55",
    "name": "CHECK # 2035",
    "amount": 500,
    "type": "expense",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_56",
    "name": "Unishippers",
    "amount": 6630.09,
    "type": "expense",
    "date": "2026-02-16T18:29:50.000Z",
    "category": "Gas Stations",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_57",
    "name": "AMEX EPAYMENT ACH PMT",
    "amount": 12000,
    "type": "expense",
    "date": "2026-02-16T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": true,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_58",
    "name": "AMEX EPAYMENT ACH PMT",
    "amount": 1668.32,
    "type": "expense",
    "date": "2026-02-16T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": true,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_59",
    "name": "AMEX EPAYMENT ACH PMT",
    "amount": 501.16,
    "type": "expense",
    "date": "2026-02-16T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": true,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_60",
    "name": "eBay",
    "amount": 161.89,
    "type": "income",
    "date": "2026-02-16T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_61",
    "name": "AMEX EPAYMENT ACH PMT",
    "amount": 10202.97,
    "type": "expense",
    "date": "2026-02-16T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": true,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_62",
    "name": "Online Transfer to CHK ...5536 transaction#: ",
    "amount": 2000,
    "type": "expense",
    "date": "2026-02-16T18:29:50.000Z",
    "category": "Internal Account Transfer",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_63",
    "name": "CHECK # 2039",
    "amount": 400,
    "type": "expense",
    "date": "2026-02-16T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_64",
    "name": "eBay",
    "amount": 177,
    "type": "income",
    "date": "2026-02-12T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_65",
    "name": "ORIG CO NAME:AMAZON.COM.CA UL ORIG ID:9978170",
    "amount": 626.54,
    "type": "income",
    "date": "2026-02-12T18:29:50.000Z",
    "category": "Payroll",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_66",
    "name": "CHECK # 2038",
    "amount": 184,
    "type": "expense",
    "date": "2026-02-12T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_67",
    "name": "CHECK # 2034",
    "amount": 1850,
    "type": "expense",
    "date": "2026-02-12T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_68",
    "name": "CHECK # 2037",
    "amount": 25141.33,
    "type": "expense",
    "date": "2026-02-12T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_69",
    "name": "CHECK # 2036",
    "amount": 34598.47,
    "type": "expense",
    "date": "2026-02-12T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_70",
    "name": "eBay",
    "amount": 60.51,
    "type": "income",
    "date": "2026-02-11T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_71",
    "name": "The Ojc Fund Donation",
    "amount": 1500,
    "type": "expense",
    "date": "2026-02-11T18:29:50.000Z",
    "category": "Charities and Non-Profits",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_72",
    "name": "PAYONEER INC 950021946",
    "amount": 42049.65,
    "type": "income",
    "date": "2026-02-10T18:29:50.000Z",
    "category": "Shops",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_73",
    "name": "eBay",
    "amount": 28.53,
    "type": "income",
    "date": "2026-02-10T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_74",
    "name": "ORIG CO NAME:Amazon Servicos ORIG ID:10299861",
    "amount": 10.2,
    "type": "income",
    "date": "2026-02-10T18:29:50.000Z",
    "category": "Payroll",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_75",
    "name": "CHECK # 2032",
    "amount": 12548.23,
    "type": "expense",
    "date": "2026-02-10T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_76",
    "name": "ORIG CO NAME:Amazon Servicos ORIG ID:10299861",
    "amount": 10.76,
    "type": "income",
    "date": "2026-02-10T18:29:50.000Z",
    "category": "Payroll",
    "lenderFlag": false,
    "account": "BUS COMPLETE CHK",
    "variance": "normal"
  },
  {
    "id": "txn_77",
    "name": "RETURNED ITEM ( 1 AT $35 )",
    "amount": 35,
    "type": "expense",
    "date": "2026-02-09T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_78",
    "name": "DDA CREDIT",
    "amount": 1850,
    "type": "income",
    "date": "2026-02-09T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  },
  {
    "id": "txn_79",
    "name": "eBay",
    "amount": 330.5,
    "type": "income",
    "date": "2026-02-09T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Clearly Better Business Checking",
    "variance": "normal"
  }
];

const NEW_LENDERS = [];

const LENDER_KEYWORDS = [
  // MCA / Revenue-Based Financing
  "ondeck","on deck","kabbage","bluevine","fundbox","credibly","can capital",
  "swift capital","expansion capital","bfs capital","retail capital",
  "rapid finance","capify","libertas funding","greenbox capital","cresthill capital",
  "cloudfund","forward financing","lendio","strategic funding",
  "wellen capital","clearco","clearbanc","uncapped","capchase",
  "8fig","slope","settle","kickfurther","rangefinancial","range financial",
  "payability","parafin","shopify capital","shopify loan",
  "amazon lending","amazon capital","paypal working capital","paypal business loan",
  "square capital","square loans","stripe capital","toast capital",
  "lightspeed capital","clover capital",
  // SBA / Fintech Business Lenders
  "sofi","funding circle","biz2credit","smartbiz","headway capital",
  "yellowstone capital","itria ventures","lendr","mantis funding",
  "national business capital","newtek","reliant funding","roc funding",
  "world business lenders","samson mca","fox capital","cardinal equity",
  "spartan capital","velox capital","vox funding",
  // BNPL / Embedded Business Finance
  "behalf","divvy","brex","bill.com capital","pipe","novel capital",
  // Common MCA descriptor fragments
  "en od capital","enod","mca funding","merchant advance","cash advance",
  "revenue advance","business advance","working capital advance"
];

const SWING_THRESHOLD = 10;

function WatchFace({ size=38, animate=true }) {
  const [, setTick] = useState(0);
  useEffect(()=>{ if(!animate)return; const iv=setInterval(()=>setTick(t=>t+1),1000); return()=>clearInterval(iv); },[animate]);
  const now = new Date();
  const s=now.getSeconds(), m=now.getMinutes(), h=now.getHours()%12;
  const sDeg=s*6, mDeg=m*6+s*0.1, hDeg=h*30+m*0.5;
  const r=size/2, cx=r, cy=r;
  const hand=(deg,len)=>{ const rad=(deg-90)*Math.PI/180; return{x:cx+len*Math.cos(rad),y:cy+len*Math.sin(rad)}; };
  const hp=hand(hDeg,r*0.52), mp=hand(mDeg,r*0.70), sp=hand(sDeg,r*0.78);
  const ticks=Array.from({length:12},(_,i)=>{
    const rad=(i*30-90)*Math.PI/180, inner=r*(i%3===0?0.78:0.82), outer=r*0.90;
    return{x1:cx+inner*Math.cos(rad),y1:cy+inner*Math.sin(rad),x2:cx+outer*Math.cos(rad),y2:cy+outer*Math.sin(rad),major:i%3===0};
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r-1} fill="none" stroke="#1B4FD8" strokeWidth="1.5"/>
      <circle cx={cx} cy={cy} r={r-3} fill="#060d1a"/>
      <circle cx={cx} cy={cy} r={r-4} fill="none" stroke="rgba(75,159,255,0.12)" strokeWidth="3"/>
      {ticks.map((t,i)=><line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke={t.major?"#4B9FFF":"rgba(75,159,255,0.25)"} strokeWidth={t.major?1.5:0.8}/>)}
      <line x1={cx} y1={cy} x2={hp.x} y2={hp.y} stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1={cx} y1={cy} x2={mp.x} y2={mp.y} stroke="#4B9FFF" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1={cx} y1={cy} x2={sp.x} y2={sp.y} stroke="#1B4FD8" strokeWidth="1" strokeLinecap="round"/>
      <circle cx={cx} cy={cy} r={2} fill="#4B9FFF"/>
    </svg>
  );
}

const Sparkline = ({ data, color, height=40, width=110 }) => {
  const max=Math.max(...data), min=Math.min(...data), range=max-min||1;
  const pts=data.map((v,i)=>{ const x=(i/(data.length-1))*width, y=height-((v-min)/range)*(height-4)-2; return `${x},${y}`; }).join(" ");
  const gid=`g${color.replace(/[^a-z0-9]/gi,"")}`;
  return (
    <svg width={width} height={height} style={{overflow:"visible"}}>
      <defs><linearGradient id={gid} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.35"/><stop offset="100%" stopColor={color} stopOpacity="0"/></linearGradient></defs>
      <polygon points={`0,${height} ${pts} ${width},${height}`} fill={`url(#${gid})`}/>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const BarChart = ({ data }) => {
  const maxVal=Math.max(...data.flatMap(d=>[d.revenue,d.expenses]))||1;
  return (
    <div style={{display:"flex",alignItems:"flex-end",gap:"5px",height:"130px"}}>
      {data.map((d,i)=>(
        <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"2px",height:"100%"}}>
          <div style={{flex:1,width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end",gap:"2px"}}>
            <div style={{width:"100%",height:`${(d.revenue/maxVal)*106}px`,background:"linear-gradient(180deg,#4B9FFF,#1B4FD8)",borderRadius:"3px 3px 0 0",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)",animation:"shimmer 2.5s infinite"}}/>
            </div>
            <div style={{width:"100%",height:`${(d.expenses/maxVal)*106}px`,background:"linear-gradient(180deg,#ff6b6b,#cc3333)",borderRadius:"3px 3px 0 0"}}/>
          </div>
          <span style={{fontSize:"9px",color:"rgba(10,22,40,0.45)",fontFamily:"'DM Mono',monospace",marginTop:"3px"}}>{d.month}</span>
        </div>
      ))}
    </div>
  );
};

const fmt=(n)=>n>=1000000?`$${(n/1000000).toFixed(2)}M`:n>=1000?`$${(n/1000).toFixed(1)}k`:`$${Math.abs(n).toFixed(0)}`;

export default function DripPlaidWatch() {
  const [activeFilter,setActiveFilter]=useState("all");
  const [alertsAck,setAlertsAck]=useState([]);
  const [selectedTxn,setSelectedTxn]=useState(null);
  const [time,setTime]=useState(new Date());
  useEffect(()=>{ const iv=setInterval(()=>setTime(new Date()),1000); return()=>clearInterval(iv); },[]);

  const lenderTxns=TRANSACTIONS.filter(t=>t.lenderFlag);
  const unackedAlerts=lenderTxns.filter(t=>!alertsAck.includes(t.id));
  const totalRevenue=TRANSACTIONS.filter(t=>t.type==="income").reduce((s,t)=>s+t.amount,0);
  const totalExpenses=TRANSACTIONS.filter(t=>t.type==="expense").reduce((s,t)=>s+t.amount,0);
  const netCashflow=totalRevenue-totalExpenses;
  const lenderExposure=lenderTxns.filter(t=>t.type==="expense").reduce((s,t)=>s+t.amount,0);

  // Use only full months for comparisons — exclude partial current month if flagged
  const fullMonths=MONTHLY.filter(m=>!m.partial);
  const currMonth=fullMonths[fullMonths.length-1];
  const prevMonth=fullMonths[fullMonths.length-2];
  const revSwing=prevMonth&&currMonth?((currMonth.revenue-prevMonth.revenue)/prevMonth.revenue*100).toFixed(1):0;
  const expSwing=prevMonth&&currMonth?((currMonth.expenses-prevMonth.expenses)/prevMonth.expenses*100).toFixed(1):0;

  // KPI values default to last full month
  const kpiRevenue=currMonth?currMonth.revenue:totalRevenue;
  const kpiExpenses=currMonth?currMonth.expenses:totalExpenses;
  const kpiNet=currMonth?currMonth.net:netCashflow;
  const kpiLenderExposure=currMonth?currMonth.lenderPayments:lenderExposure;
  const kpiLabel=currMonth?currMonth.month:"Current Period";
  const partialMonth=MONTHLY.find(m=>m.partial);

  const filtered=TRANSACTIONS.filter(t=>{ if(activeFilter==="income")return t.type==="income"; if(activeFilter==="expense")return t.type==="expense"; if(activeFilter==="lender")return t.lenderFlag; return true; });
  const timeStr=time.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
  const dateStr=time.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric'});

  return (
    <div style={{minHeight:"100vh",background:"#f0f4ff",color:"#0d1829",fontFamily:"'DM Sans',system-ui,sans-serif",padding:"20px 24px 40px"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:3px;} ::-webkit-scrollbar-track{background:transparent;} ::-webkit-scrollbar-thumb{background:#1B4FD8;border-radius:4px;}
        @keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
        @keyframes pulse-ring{0%{transform:scale(1);opacity:1}100%{transform:scale(2);opacity:0}}
        @keyframes alertBlink{0%,100%{opacity:1}50%{opacity:0.3}}
        .txn-row:hover{background:rgba(27,79,216,0.08)!important;cursor:pointer;}
        .filter-btn{border:none;cursor:pointer;transition:all 0.2s;}
      `}</style>

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"22px",paddingBottom:"16px",borderBottom:"1px solid rgba(27,79,216,0.2)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
          <WatchFace size={44} animate={true}/>
          <div>
            <div style={{display:"flex",alignItems:"baseline",gap:"5px"}}>
              <span style={{fontFamily:"'Syne',sans-serif",fontSize:"22px",fontWeight:800,color:"#0A1628",letterSpacing:"-0.5px"}}>drip's</span>
              <span style={{fontFamily:"'Syne',sans-serif",fontSize:"22px",fontWeight:800,background:"linear-gradient(90deg,#4B9FFF,#1B4FD8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:"-0.5px"}}>PlaidWatch</span>
            </div>
            <div style={{fontSize:"10px",color:"rgba(27,79,216,0.6)",fontFamily:"'DM Mono',monospace",letterSpacing:"1.5px",marginTop:"1px"}}>TRADE FINANCE · CASH FLOW MONITOR</div>
            <div style={{fontSize:"13px",fontWeight:600,color:"#0A1628",marginTop:"4px",letterSpacing:"-0.2px"}}>GBS Supplies   March 6</div>
          </div>
        </div>
        <div style={{textAlign:"center"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:"22px",fontWeight:500,color:"#FFFFFF",letterSpacing:"2px"}}>{timeStr}</div>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:"10px",color:"rgba(75,159,255,0.4)",letterSpacing:"1px"}}>{dateStr}</div>
        </div>
        {unackedAlerts.length>0?(
          <div style={{background:"rgba(255,80,80,0.08)",border:"1px solid rgba(255,80,80,0.3)",borderRadius:"10px",padding:"10px 16px",display:"flex",alignItems:"center",gap:"10px"}}>
            <div style={{position:"relative",width:"10px",height:"10px"}}>
              <div style={{width:"10px",height:"10px",borderRadius:"50%",background:"#ff5050",position:"absolute"}}/>
              <div style={{width:"10px",height:"10px",borderRadius:"50%",background:"rgba(255,80,80,0.5)",position:"absolute",animation:"pulse-ring 1.4s infinite"}}/>
            </div>
            <div>
              <div style={{fontSize:"12px",fontWeight:600,color:"#ff7070"}}>{unackedAlerts.length} Lender{unackedAlerts.length>1?"s":""} Detected</div>
              <div style={{fontSize:"10px",color:"#883333",fontFamily:"'DM Mono',monospace"}}>{fmt(lenderExposure)} exposure</div>
            </div>
            <button onClick={()=>setAlertsAck(lenderTxns.map(t=>t.id))} style={{background:"rgba(255,80,80,0.12)",border:"1px solid rgba(255,80,80,0.25)",color:"#ff7070",borderRadius:"5px",padding:"3px 9px",fontSize:"10px",cursor:"pointer",fontFamily:"'DM Mono',monospace"}}>ACK ALL</button>
          </div>
        ):(
          <div style={{display:"flex",alignItems:"center",gap:"8px",padding:"10px 16px",background:"rgba(27,79,216,0.06)",border:"1px solid rgba(27,79,216,0.15)",borderRadius:"10px"}}>
            <div style={{width:"7px",height:"7px",borderRadius:"50%",background:"#4B9FFF",animation:"alertBlink 3s infinite"}}/>
            <span style={{fontSize:"10px",color:"rgba(75,159,255,0.6)",fontFamily:"'DM Mono',monospace"}}>ALL CLEAR · MONITORING</span>
          </div>
        )}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px",marginBottom:"16px"}}>
        {[
          {label:"Revenue",value:fmt(kpiRevenue),sub:`${revSwing>0?"▲":"▼"} ${Math.abs(revSwing)}% vs prior month`,subColor:revSwing>0?"#4B9FFF":"#ff6b6b",spark:MONTHLY.filter(m=>!m.partial).map(m=>m.revenue),sparkColor:"#4B9FFF",accent:"#4B9FFF",border:"rgba(75,159,255,0.2)"},
          {label:"Expenses",value:fmt(kpiExpenses),sub:`${expSwing>0?"▲":"▼"} ${Math.abs(expSwing)}% vs prior month`,subColor:expSwing>0?"#ff6b6b":"#4B9FFF",spark:MONTHLY.filter(m=>!m.partial).map(m=>m.expenses),sparkColor:"#ff6b6b",accent:"#ff6b6b",border:"rgba(255,107,107,0.2)"},
          {label:"Net Cashflow",value:`${kpiNet>=0?"+":""}${fmt(Math.abs(kpiNet))}`,sub:kpiNet>=0?"Positive position":"Deficit — review",subColor:kpiNet>=0?"#4B9FFF":"#ff6b6b",spark:MONTHLY.filter(m=>!m.partial).map(m=>Math.abs(m.net)+1),sparkColor:"#7B5FFF",accent:"#7B5FFF",border:"rgba(123,95,255,0.2)"},
          {label:"Lender Exposure",value:fmt(kpiLenderExposure),sub:`${lenderTxns.length} lender payments flagged`,subColor:"#ffaa44",spark:MONTHLY.filter(m=>!m.partial).map(m=>m.lenderPayments+1),sparkColor:"#ffaa44",accent:"#ffaa44",border:unackedAlerts.length>0?"rgba(255,170,50,0.4)":"rgba(255,170,50,0.15)"},
        ].map((card,i)=>(
          <div key={i} style={{background:"#ffffff",border:`1px solid ${card.border}`,borderRadius:"12px",padding:"16px 18px",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,right:0,width:"70px",height:"70px",background:`radial-gradient(circle at 100% 0%,${card.accent}20,transparent 70%)`}}/>
            <div style={{position:"absolute",bottom:6,right:8,opacity:0.04}}><WatchFace size={40} animate={false}/></div>
            <div style={{fontSize:"10px",color:"rgba(27,79,216,0.6)",fontFamily:"'DM Mono',monospace",letterSpacing:"0.8px",marginBottom:"7px",textTransform:"uppercase"}}>{card.label}</div>
            <div style={{fontSize:"24px",fontFamily:"'Syne',sans-serif",fontWeight:800,color:card.accent,marginBottom:"3px",letterSpacing:"-0.5px"}}>{card.value}</div>
            <div style={{fontSize:"11px",color:card.subColor,marginBottom:"6px"}}>{card.sub}</div>
            <div style={{fontSize:"9px",color:"rgba(27,79,216,0.35)",fontFamily:"'DM Mono',monospace",marginBottom:"6px"}}>{kpiLabel}</div>
            <Sparkline data={card.spark} color={card.sparkColor} width={100} height={32}/>
          </div>
        ))}
      </div>

      {partialMonth&&(
        <div style={{background:"rgba(27,79,216,0.04)",border:"1px solid rgba(27,79,216,0.15)",borderRadius:"8px",padding:"9px 16px",marginBottom:"12px",display:"flex",alignItems:"center",gap:"10px"}}>
          <span style={{fontSize:"13px"}}>📅</span>
          <span style={{fontSize:"11px",color:"rgba(27,79,216,0.6)",fontFamily:"'DM Mono',monospace"}}>{partialMonth.month} IS A PARTIAL MONTH — KPIs and comparisons based on {kpiLabel}</span>
        </div>
      )}

      {(Math.abs(revSwing)>SWING_THRESHOLD||Math.abs(expSwing)>SWING_THRESHOLD)&&(
        <div style={{background:"rgba(255,170,50,0.05)",border:"1px solid rgba(255,170,50,0.18)",borderRadius:"8px",padding:"10px 16px",marginBottom:"14px",display:"flex",alignItems:"center",gap:"12px"}}>
          <span style={{fontSize:"15px"}}>⚡</span>
          <div style={{flex:1}}>
            <span style={{fontSize:"12px",fontWeight:600,color:"#ffaa44"}}>Swing Detected — </span>
            <span style={{fontSize:"12px",color:"rgba(10,22,40,0.5)"}}>
              {Math.abs(revSwing)>SWING_THRESHOLD&&`Revenue ${revSwing>0?"up":"down"} ${Math.abs(revSwing)}% MoM. `}
              {Math.abs(expSwing)>SWING_THRESHOLD&&`Expenses ${expSwing>0?"up":"down"} ${Math.abs(expSwing)}% MoM.`}
            </span>
          </div>
          <span style={{fontSize:"10px",color:"rgba(255,170,50,0.35)",fontFamily:"'DM Mono',monospace"}}>±{SWING_THRESHOLD}%</span>
        </div>
      )}

      {unackedAlerts.length>0&&(
        <div style={{marginBottom:"14px"}}>
          <div style={{fontSize:"10px",color:"rgba(255,80,80,0.45)",fontFamily:"'DM Mono',monospace",letterSpacing:"1.2px",marginBottom:"7px"}}>⚠ LENDER ALERTS — REQUIRES REVIEW</div>
          <div style={{display:"flex",flexDirection:"column",gap:"5px",maxHeight:"180px",overflowY:"auto"}}>
            {unackedAlerts.map(txn=>(
              <div key={txn.id} style={{background:"rgba(255,60,60,0.04)",border:"1px solid rgba(255,60,60,0.18)",borderRadius:"7px",padding:"9px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                  <div style={{width:"5px",height:"5px",borderRadius:"50%",background:"#ff5050",animation:"alertBlink 1.5s infinite",flexShrink:0}}/>
                  <div>
                    <span style={{fontSize:"12px",fontWeight:500}}>{txn.name}</span>
                    <span style={{fontSize:"10px",color:"rgba(255,80,80,0.45)",marginLeft:"8px",fontFamily:"'DM Mono',monospace"}}>LENDER · {txn.account}</span>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                  <span style={{fontSize:"13px",fontFamily:"'DM Mono',monospace",color:txn.type==="expense"?"#ff7070":"#ffaa44"}}>{txn.type==="expense"?"-":"+"}{txn.amount.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
                  <span style={{fontSize:"10px",color:"rgba(10,22,40,0.4)"}}>{txn.date}</span>
                  <button onClick={()=>setAlertsAck(a=>[...a,txn.id])} style={{background:"none",border:"1px solid rgba(255,60,60,0.2)",color:"rgba(255,100,100,0.6)",borderRadius:"4px",padding:"2px 8px",fontSize:"10px",cursor:"pointer",fontFamily:"'DM Mono',monospace"}}>ACK</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{display:"grid",gridTemplateColumns:"1fr 320px",gap:"12px"}}>
        <div style={{background:"#ffffff",border:"1px solid rgba(27,79,216,0.18)",borderRadius:"12px",overflow:"hidden"}}>
          <div style={{padding:"14px 18px",borderBottom:"1px solid rgba(27,79,216,0.12)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
              <span style={{fontSize:"13px",fontWeight:600}}>Transaction Feed</span>
              <span style={{fontSize:"10px",color:"rgba(75,159,255,0.35)",fontFamily:"'DM Mono',monospace"}}>{filtered.length} RECORDS</span>
            </div>
            <div style={{display:"flex",gap:"5px"}}>
              {["all","income","expense","lender"].map(f=>(
                <button key={f} className="filter-btn" onClick={()=>setActiveFilter(f)} style={{padding:"3px 10px",borderRadius:"5px",fontSize:"10px",fontFamily:"'DM Mono',monospace",background:activeFilter===f?(f==="lender"?"#ff5050":"#1B4FD8"):"rgba(27,79,216,0.07)",color:activeFilter===f?"#fff":"rgba(27,79,216,0.6)",border:activeFilter===f?"none":"1px solid rgba(27,79,216,0.18)",fontWeight:activeFilter===f?600:400}}>
                  {f==="lender"?"⚠ LENDERS":f.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div style={{maxHeight:"400px",overflowY:"auto"}}>
            {filtered.map((txn,i)=>(
              <div key={txn.id} className="txn-row" onClick={()=>setSelectedTxn(selectedTxn?.id===txn.id?null:txn)}
                style={{padding:"11px 18px",borderBottom:"1px solid rgba(27,79,216,0.07)",display:"flex",justifyContent:"space-between",alignItems:"center",
                  background:txn.lenderFlag&&!alertsAck.includes(txn.id)?"rgba(255,60,60,0.04)":selectedTxn?.id===txn.id?"rgba(27,79,216,0.07)":"transparent"}}>
                <div style={{display:"flex",alignItems:"center",gap:"11px"}}>
                  <div style={{width:"32px",height:"32px",borderRadius:"7px",flexShrink:0,background:txn.lenderFlag?"rgba(255,60,60,0.14)":txn.type==="income"?"rgba(27,79,216,0.18)":"rgba(10,22,40,0.05)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",border:`1px solid ${txn.lenderFlag?"rgba(255,60,60,0.18)":"rgba(27,79,216,0.15)"}`}}>
                    {txn.lenderFlag?"🏦":txn.type==="income"?"↑":"↓"}
                  </div>
                  <div>
                    <div style={{fontSize:"12px",fontWeight:500,display:"flex",alignItems:"center",gap:"6px"}}>
                      {txn.name}
                      {txn.lenderFlag&&!alertsAck.includes(txn.id)&&<span style={{fontSize:"8px",background:"#ff5050",color:"#fff",padding:"1px 5px",borderRadius:"3px",fontFamily:"'DM Mono',monospace"}}>LENDER</span>}
                    </div>
                    <div style={{fontSize:"10px",color:"rgba(75,159,255,0.35)",fontFamily:"'DM Mono',monospace",marginTop:"1px"}}>{txn.category} · {txn.date}</div>
                  </div>
                </div>
                <div style={{textAlign:"right",flexShrink:0}}>
                  <div style={{fontSize:"13px",fontFamily:"'DM Mono',monospace",fontWeight:500,color:txn.type==="income"?"#4B9FFF":txn.lenderFlag?"#ff7070":"rgba(10,22,40,0.7)"}}>
                    {txn.type==="income"?"+":"-"}{txn.amount.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}
                  </div>
                  {txn.variance==="high"&&<div style={{fontSize:"9px",color:"#ffaa44",fontFamily:"'DM Mono',monospace"}}>▲ HIGH</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
          <div style={{background:"#ffffff",border:"1px solid rgba(27,79,216,0.18)",borderRadius:"12px",padding:"14px 16px"}}>
            <div style={{fontSize:"10px",color:"rgba(75,159,255,0.4)",fontFamily:"'DM Mono',monospace",letterSpacing:"0.8px",marginBottom:"3px"}}>TREND</div>
            <div style={{fontSize:"13px",fontWeight:600,marginBottom:"12px"}}>Revenue vs Expenses</div>
            <BarChart data={MONTHLY}/>
            <div style={{display:"flex",gap:"12px",marginTop:"10px"}}>
              {[["#1B4FD8","Revenue"],["#ff6b6b","Expenses"]].map(([c,l])=>(
                <div key={l} style={{display:"flex",alignItems:"center",gap:"5px",fontSize:"10px",color:"rgba(10,22,40,0.45)"}}>
                  <div style={{width:"8px",height:"8px",borderRadius:"2px",background:c}}/>{l}
                </div>
              ))}
            </div>
          </div>

          <div style={{background:"#ffffff",border:"1px solid rgba(255,170,50,0.15)",borderRadius:"12px",padding:"14px 16px",flex:1}}>
            <div style={{fontSize:"10px",color:"rgba(255,170,50,0.4)",fontFamily:"'DM Mono',monospace",letterSpacing:"0.8px",marginBottom:"3px"}}>LENDER EXPOSURE</div>
            <div style={{fontSize:"13px",fontWeight:600,marginBottom:"10px"}}>6-Month History</div>

            {NEW_LENDERS.length>0&&(
              <div style={{background:"rgba(255,60,60,0.05)",border:"1px solid rgba(255,60,60,0.2)",borderRadius:"7px",padding:"8px 10px",marginBottom:"10px"}}>
                <div style={{fontSize:"9px",color:"#ff5050",fontFamily:"'DM Mono',monospace",letterSpacing:"1px",marginBottom:"5px"}}>⚠ NEW LENDER{NEW_LENDERS.length>1?"S":""} DETECTED</div>
                {NEW_LENDERS.map(n=>(
                  <div key={n} style={{fontSize:"11px",color:"rgba(10,22,40,0.7)",display:"flex",alignItems:"center",gap:"5px",marginBottom:"3px"}}>
                    <div style={{width:"4px",height:"4px",borderRadius:"50%",background:"#ff5050",flexShrink:0}}/>
                    {n}
                  </div>
                ))}
                <div style={{fontSize:"9px",color:"rgba(255,80,80,0.45)",fontFamily:"'DM Mono',monospace",marginTop:"4px"}}>First appearance in last 2 months</div>
              </div>
            )}

            <div style={{display:"flex",flexDirection:"column",gap:"5px",maxHeight:"260px",overflowY:"auto"}}>
              {MONTHLY.slice().reverse().map((m,i)=>{
                const isPartial=m.partial;
                const maxPay=Math.max(...MONTHLY.map(x=>x.lenderPayments),1);
                const pct=(m.lenderPayments/maxPay*100).toFixed(0);
                const isRecent=i<=1;
                return (
                  <div key={m.month} style={{padding:"6px 8px",borderRadius:"6px",background:isRecent?"rgba(255,170,50,0.04)":"transparent",border:isRecent?"1px solid rgba(255,170,50,0.12)":"1px solid transparent"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"}}>
                      <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
                        <span style={{fontSize:"10px",fontFamily:"'DM Mono',monospace",color:isRecent?"#ffaa44":"rgba(10,22,40,0.45)",fontWeight:isRecent?600:400}}>{m.month}</span>
                        {isPartial&&<span style={{fontSize:"8px",background:"rgba(27,79,216,0.12)",color:"rgba(27,79,216,0.6)",padding:"1px 4px",borderRadius:"3px",fontFamily:"'DM Mono',monospace"}}>PARTIAL</span>}
                      </div>
                      <span style={{fontSize:"11px",fontFamily:"'DM Mono',monospace",color:m.lenderPayments>0?"#ffaa44":"rgba(10,22,40,0.3)",fontWeight:600}}>
                        {m.lenderPayments>0?fmt(m.lenderPayments):"—"}
                      </span>
                    </div>
                    {m.lenderPayments>0&&(
                      <div style={{height:"3px",background:"rgba(10,22,40,0.06)",borderRadius:"2px",overflow:"hidden"}}>
                        <div style={{height:"100%",width:`${pct}%`,background:isRecent?"linear-gradient(90deg,#ffaa44,#ff6644)":"linear-gradient(90deg,rgba(255,170,50,0.4),rgba(255,100,50,0.4))",borderRadius:"2px"}}/>
                      </div>
                    )}
                    {m.lenderNames&&m.lenderNames.length>0&&(
                      <div style={{marginTop:"4px",display:"flex",flexWrap:"wrap",gap:"3px"}}>
                        {m.lenderNames.slice(0,3).map(n=>(
                          <span key={n} style={{fontSize:"8px",background:NEW_LENDERS.includes(n)?"rgba(255,60,60,0.1)":"rgba(10,22,40,0.05)",color:NEW_LENDERS.includes(n)?"#ff5050":"rgba(10,22,40,0.4)",padding:"1px 5px",borderRadius:"3px",fontFamily:"'DM Mono',monospace",border:NEW_LENDERS.includes(n)?"1px solid rgba(255,60,60,0.2)":"1px solid transparent"}}>
                            {NEW_LENDERS.includes(n)?"⚠ ":""}{n.length>22?n.slice(0,22)+"…":n}
                          </span>
                        ))}
                        {m.lenderNames.length>3&&<span style={{fontSize:"8px",color:"rgba(10,22,40,0.3)",fontFamily:"'DM Mono',monospace"}}>+{m.lenderNames.length-3} more</span>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div style={{marginTop:"8px",paddingTop:"8px",borderTop:"1px solid rgba(10,22,40,0.08)",display:"flex",justifyContent:"space-between",fontSize:"11px",fontFamily:"'DM Mono',monospace"}}>
              <span style={{color:"rgba(10,22,40,0.4)"}}>6-MO TOTAL</span>
              <span style={{color:"#ffaa44",fontWeight:600}}>{fmt(MONTHLY.reduce((s,m)=>s+m.lenderPayments,0))}</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginTop:"12px"}}>
        <div style={{background:"#ffffff",border:"1px solid rgba(75,159,255,0.2)",borderRadius:"12px",padding:"14px 16px"}}>
          <div style={{fontSize:"10px",color:"rgba(75,159,255,0.5)",fontFamily:"'DM Mono',monospace",letterSpacing:"0.8px",marginBottom:"3px"}}>TOP REVENUE IN</div>
          <div style={{fontSize:"13px",fontWeight:600,marginBottom:"12px"}}>Largest Income Sources</div>
          {(()=>{
            const topIn=Object.entries(TRANSACTIONS.filter(t=>t.type==="income").reduce((acc,t)=>{const k=t.name.length>28?t.name.slice(0,28)+"…":t.name;acc[k]=(acc[k]||0)+t.amount;return acc;},{})).sort((a,b)=>b[1]-a[1]).slice(0,5);
            const maxAmt=topIn[0]?topIn[0][1]:1;
            return topIn.length===0?(
              <div style={{color:"rgba(10,22,40,0.35)",fontSize:"12px"}}>No income transactions found</div>
            ):(
              <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                {topIn.map(([name,amt],idx)=>{
                  const pct=(amt/maxAmt*100).toFixed(0);
                  return (
                    <div key={name}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:"3px",alignItems:"center"}}>
                        <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
                          <span style={{fontSize:"9px",fontFamily:"'DM Mono',monospace",color:"rgba(75,159,255,0.4)",minWidth:"14px"}}>#{idx+1}</span>
                          <span style={{fontSize:"11px",color:"rgba(10,22,40,0.7)",fontWeight:500}}>{name}</span>
                        </div>
                        <span style={{fontSize:"11px",fontFamily:"'DM Mono',monospace",color:"#4B9FFF",fontWeight:600}}>+{fmt(amt)}</span>
                      </div>
                      <div style={{height:"3px",background:"rgba(27,79,216,0.08)",borderRadius:"2px",overflow:"hidden"}}>
                        <div style={{height:"100%",width:`${pct}%`,background:"linear-gradient(90deg,#4B9FFF,#1B4FD8)",borderRadius:"2px"}}/>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>

        <div style={{background:"#ffffff",border:"1px solid rgba(214,48,48,0.15)",borderRadius:"12px",padding:"14px 16px"}}>
          <div style={{fontSize:"10px",color:"rgba(214,48,48,0.45)",fontFamily:"'DM Mono',monospace",letterSpacing:"0.8px",marginBottom:"3px"}}>TOP PAYMENTS OUT</div>
          <div style={{fontSize:"13px",fontWeight:600,marginBottom:"12px"}}>Largest Expense Recipients</div>
          {(()=>{
            const topOut=Object.entries(TRANSACTIONS.filter(t=>t.type==="expense"&&!t.lenderFlag).reduce((acc,t)=>{const k=t.name.length>28?t.name.slice(0,28)+"…":t.name;acc[k]=(acc[k]||0)+t.amount;return acc;},{})).sort((a,b)=>b[1]-a[1]).slice(0,5);
            const maxAmt=topOut[0]?topOut[0][1]:1;
            return topOut.length===0?(
              <div style={{color:"rgba(10,22,40,0.35)",fontSize:"12px"}}>No expense transactions found</div>
            ):(
              <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                {topOut.map(([name,amt],idx)=>{
                  const pct=(amt/maxAmt*100).toFixed(0);
                  return (
                    <div key={name}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:"3px",alignItems:"center"}}>
                        <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
                          <span style={{fontSize:"9px",fontFamily:"'DM Mono',monospace",color:"rgba(214,48,48,0.35)",minWidth:"14px"}}>#{idx+1}</span>
                          <span style={{fontSize:"11px",color:"rgba(10,22,40,0.7)",fontWeight:500}}>{name}</span>
                        </div>
                        <span style={{fontSize:"11px",fontFamily:"'DM Mono',monospace",color:"#d63030",fontWeight:600}}>-{fmt(amt)}</span>
                      </div>
                      <div style={{height:"3px",background:"rgba(214,48,48,0.08)",borderRadius:"2px",overflow:"hidden"}}>
                        <div style={{height:"100%",width:`${pct}%`,background:"linear-gradient(90deg,#ff6b6b,#d63030)",borderRadius:"2px"}}/>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </div>

      <div style={{marginTop:"16px",display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"12px",borderTop:"1px solid rgba(27,79,216,0.1)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <WatchFace size={16} animate={true}/>
          <span style={{fontSize:"10px",color:"rgba(75,159,255,0.2)",fontFamily:"'DM Mono',monospace"}}>DRIP'S PLAIDWATCH · GBS Supplies   March 6 · {TRANSACTIONS.length} TRANSACTIONS</span>
        </div>
        <div style={{display:"flex",gap:"5px",alignItems:"center"}}>
          <div style={{width:"4px",height:"4px",borderRadius:"50%",background:"#4B9FFF",animation:"alertBlink 2.5s infinite"}}/>
          <span style={{fontSize:"10px",color:"rgba(75,159,255,0.2)",fontFamily:"'DM Mono',monospace"}}>LIVE</span>
        </div>
      </div>
    </div>
  );
}
