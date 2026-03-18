import { useState, useEffect } from "react";

// ── Drip Capital · PlaidWatch · Sohnaa Foods   March ─────────────────────────────────────
const MONTHLY = [
  {
    "month": "Feb '26",
    "revenue": 128989,
    "expenses": 114468,
    "net": 14521,
    "lenderPayments": 1500,
    "lenderNames": [
      "ZELLE TO KIRAN NEW NO ON 02/26…"
    ],
    "partial": false
  },
  {
    "month": "Mar '26",
    "revenue": 142568,
    "expenses": 131048,
    "net": 11520,
    "lenderPayments": 5265,
    "lenderNames": [
      "ZELLE TO KIRAN NEW NO ON 03/11…",
      "Dept Education Student Ln",
      "ZELLE TO SUKHPREET SINGH ON 03…",
      "Dept Education",
      "ZELLE TO KAUR MANDEEP ON 03/03…"
    ],
    "partial": true
  }
];

const TRANSACTIONS = [
  {
    "id": "txn_1",
    "name": "Neiman Marcu",
    "amount": 3273.76,
    "type": "expense",
    "date": "2026-03-17T18:29:50.000Z",
    "category": "Financial",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_2",
    "name": "ZELLE TO SUKHPREET SINGH ON 03/17 REF # WFCT0",
    "amount": 500,
    "type": "expense",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_3",
    "name": "ZELLE FROM GURMUKH SINGH ON 03/17 REF # BACFK",
    "amount": 30,
    "type": "income",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_4",
    "name": "WIRE TRANSFER WITHDRAWAL",
    "amount": 3210.11,
    "type": "expense",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Wire",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_5",
    "name": "WIRE TRANSFER WITHDRAWAL",
    "amount": 588,
    "type": "expense",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Wire",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_6",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 4000,
    "type": "expense",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_7",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 2600,
    "type": "expense",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_8",
    "name": "Credit Item",
    "amount": 7492,
    "type": "income",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_9",
    "name": "Credit Item",
    "amount": 9475,
    "type": "income",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_10",
    "name": "ZELLE TO HARBANS SINGH ON 03/17 REF # WFCT0ZX",
    "amount": 150,
    "type": "expense",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_11",
    "name": "Credit Item",
    "amount": 3988.5,
    "type": "income",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_12",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 4000,
    "type": "income",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_13",
    "name": "CHECK",
    "amount": 2415,
    "type": "expense",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_14",
    "name": "TRANSFER RMTLY* R3786 +18887364859 WA CARD135",
    "amount": 1800,
    "type": "expense",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_15",
    "name": "TRANSFER RMTLY* R2817 +18887364859 WA CARD135",
    "amount": 1504.34,
    "type": "expense",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_16",
    "name": "Amazon",
    "amount": 182.11,
    "type": "expense",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_17",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 2600,
    "type": "income",
    "date": "2026-03-16T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_18",
    "name": "MOBILE DEPOSIT : REF NUMBER :917160246665",
    "amount": 769,
    "type": "income",
    "date": "2026-03-15T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_19",
    "name": "MOBILE DEPOSIT : REF NUMBER :817160245889",
    "amount": 5252.5,
    "type": "income",
    "date": "2026-03-15T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_20",
    "name": "ZELLE TO HARBANS SINGH ON 03/16 REF # WFCT0ZX",
    "amount": 3000,
    "type": "expense",
    "date": "2026-03-15T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_21",
    "name": "ZELLE FROM ER XPRESS INC ON 03/14 REF # BACFT",
    "amount": 50,
    "type": "income",
    "date": "2026-03-15T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_22",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 3000,
    "type": "expense",
    "date": "2026-03-15T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_23",
    "name": "OpenAI",
    "amount": 18.37,
    "type": "expense",
    "date": "2026-03-15T18:29:50.000Z",
    "category": "Other",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_24",
    "name": "Apple",
    "amount": 10.99,
    "type": "expense",
    "date": "2026-03-15T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_25",
    "name": "Hapn",
    "amount": 14.95,
    "type": "expense",
    "date": "2026-03-15T18:29:50.000Z",
    "category": "Service",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_26",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 3000,
    "type": "income",
    "date": "2026-03-15T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_27",
    "name": "Chevron",
    "amount": 124.61,
    "type": "expense",
    "date": "2026-03-15T18:29:50.000Z",
    "category": "Gas Stations",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_28",
    "name": "ZELLE FROM SS BAJWA TRUCKING INC ON 03/13 REF",
    "amount": 178,
    "type": "income",
    "date": "2026-03-12T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_29",
    "name": "ZELLE FROM AVANPREET KAUR ON 03/13 REF # BACW",
    "amount": 25,
    "type": "income",
    "date": "2026-03-12T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_30",
    "name": "ZELLE FROM AVANPREET KAUR ON 03/13 REF # BACY",
    "amount": 290,
    "type": "income",
    "date": "2026-03-12T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_31",
    "name": "The Meritage Resort and Spa",
    "amount": 779.98,
    "type": "expense",
    "date": "2026-03-12T18:29:50.000Z",
    "category": "Lodging",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_32",
    "name": "Credit One Bank Payment 260307 70557252 SHAHB",
    "amount": 386.58,
    "type": "expense",
    "date": "2026-03-12T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_33",
    "name": "Credit One Bank Payment 260307 41499228 SHAHB",
    "amount": 129.12,
    "type": "expense",
    "date": "2026-03-12T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_34",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS PLATI",
    "amount": 6000,
    "type": "expense",
    "date": "2026-03-11T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_35",
    "name": "ONLINE TRANSFER TO AULAKH S EVERYDAY CHECKING",
    "amount": 2600,
    "type": "expense",
    "date": "2026-03-11T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_36",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 2600,
    "type": "income",
    "date": "2026-03-11T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (7275)",
    "variance": "normal"
  },
  {
    "id": "txn_37",
    "name": "WIRE TRANS SVC CHARGE - SEQUENCE: 26031219559",
    "amount": 25,
    "type": "expense",
    "date": "2026-03-11T18:29:50.000Z",
    "category": "Wire Transfer",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_38",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 6000,
    "type": "income",
    "date": "2026-03-11T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_39",
    "name": "MOBILE DEPOSIT : REF NUMBER :012120732461",
    "amount": 3327,
    "type": "income",
    "date": "2026-03-11T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_40",
    "name": "WT 260312-195591 PUNJAB NATIONAL BAN /BNF=Ais",
    "amount": 10000,
    "type": "expense",
    "date": "2026-03-11T18:29:50.000Z",
    "category": "Wire",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_41",
    "name": "Identity IQ",
    "amount": 29.99,
    "type": "expense",
    "date": "2026-03-11T18:29:50.000Z",
    "category": "Financial",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_42",
    "name": "Living Spaces",
    "amount": 212.55,
    "type": "expense",
    "date": "2026-03-11T18:29:50.000Z",
    "category": "Furniture and Home Decor",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_43",
    "name": "ZELLE FROM NEW INDIAN SUPERMARKET ON 03/11 RE",
    "amount": 8600,
    "type": "income",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Supermarkets and Groceries",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_44",
    "name": "WT 260311-142817 JPMORGAN CHASE BANK /BNF=DRI",
    "amount": 1305,
    "type": "expense",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Wire",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_45",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 2300,
    "type": "expense",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_46",
    "name": "ATM WITHDRAWAL AUTHORIZED ON 03/11 160 N Main",
    "amount": 200,
    "type": "expense",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "ATM",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_47",
    "name": "ZELLE TO KIRAN NEW NO ON 03/11 REF # WFCT0ZWQ",
    "amount": 3500,
    "type": "expense",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Loans and Mortgages",
    "lenderFlag": true,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_48",
    "name": "ZELLE FROM TANDOORI BAR AND GRILL LLC ON 03/1",
    "amount": 2785,
    "type": "income",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Restaurants",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_49",
    "name": "WIRE TRANS SVC CHARGE - SEQUENCE: 26031114281",
    "amount": 25,
    "type": "expense",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Wire Transfer",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_50",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 2000,
    "type": "expense",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_51",
    "name": "MOBILE DEPOSIT : REF NUMBER :616110878339",
    "amount": 1111,
    "type": "income",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_52",
    "name": "BUSINESS TO BUSINESS ACH CAPITAL ONE MOBILE P",
    "amount": 1967.03,
    "type": "expense",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_53",
    "name": "Apple",
    "amount": 19.99,
    "type": "expense",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_54",
    "name": "Bottega Napa",
    "amount": 78.18,
    "type": "expense",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Restaurants",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_55",
    "name": "The Meritage Resort and Spa",
    "amount": 891.06,
    "type": "expense",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Lodging",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_56",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 2300,
    "type": "income",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_57",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 2000,
    "type": "income",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_58",
    "name": "CHECK",
    "amount": 738.22,
    "type": "expense",
    "date": "2026-03-10T18:29:50.000Z",
    "category": "Check",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_59",
    "name": "Beauty And You Hong Kong",
    "amount": 64.35,
    "type": "expense",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Beauty Products",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_60",
    "name": "ZELLE TO AMRITPA SINGH ON 03/10 REF # WFCT0ZW",
    "amount": 550,
    "type": "expense",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_61",
    "name": "ZELLE FROM VANSHDEEP SINGH ON 03/10 REF # BAC",
    "amount": 45,
    "type": "income",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_62",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS CHE",
    "amount": 4000,
    "type": "income",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_63",
    "name": "MOBILE DEPOSIT : REF NUMBER :811100387649",
    "amount": 982,
    "type": "income",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_64",
    "name": "MOBILE DEPOSIT : REF NUMBER :714100615955",
    "amount": 12081,
    "type": "income",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_65",
    "name": "MOBILE DEPOSIT : REF NUMBER :511100395841",
    "amount": 1070,
    "type": "income",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_66",
    "name": "MOBILE DEPOSIT : REF NUMBER :510100318633",
    "amount": 2106,
    "type": "income",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_67",
    "name": "IMAGINE VISA PMT ePay 260307 IMAGINE VISA PM ",
    "amount": 70,
    "type": "expense",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Payment",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_68",
    "name": "ZELLE FROM GURMUKH SINGH ON 03/10 REF # USBHR",
    "amount": 490,
    "type": "income",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_69",
    "name": "MOBILE DEPOSIT : REF NUMBER :211100392305",
    "amount": 337,
    "type": "income",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_70",
    "name": "Bottega",
    "amount": 58.18,
    "type": "expense",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Restaurants",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_71",
    "name": "ZELLE TO HARBANS SINGH ON 03/10 REF # WFCT0ZW",
    "amount": 50,
    "type": "expense",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Gas Stations",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_72",
    "name": "Biberk Insurance",
    "amount": 70.04,
    "type": "expense",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Insurance",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_73",
    "name": "Walmart",
    "amount": 94.6,
    "type": "expense",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Supermarkets and Groceries",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_74",
    "name": "Rh Yountville Rest",
    "amount": 30.36,
    "type": "expense",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Restaurants",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_75",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS PLATI",
    "amount": 4000,
    "type": "expense",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_76",
    "name": "Credit One Bank Payment 260225 70557252 AULAK",
    "amount": 30,
    "type": "expense",
    "date": "2026-03-09T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_77",
    "name": "Paseo Villas",
    "amount": 2370.24,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Rent",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_78",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 100,
    "type": "income",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_79",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 2000,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_80",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 3000,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_81",
    "name": "MOBILE DEPOSIT : REF NUMBER :321060648885",
    "amount": 2825,
    "type": "income",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_82",
    "name": "Bottega Napa",
    "amount": 129.13,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Restaurants",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_83",
    "name": "Bistro Don Giovanni",
    "amount": 127.45,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Restaurants",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_84",
    "name": "Staples",
    "amount": 35.95,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Office Supplies",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_85",
    "name": "SFO Long Term Parking",
    "amount": 12,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Parking",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_86",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 2000,
    "type": "income",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_87",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 3000,
    "type": "income",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_88",
    "name": "Credit One Bank Payment 260205 41499228 AULAK",
    "amount": 20.12,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_89",
    "name": "Comcast",
    "amount": 385.23,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Cable",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_90",
    "name": "Comcast",
    "amount": 283.14,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Cable",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_91",
    "name": "Lucky Spa Asian Massage",
    "amount": 60,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Personal Care",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_92",
    "name": "The Meritage",
    "amount": 1091.06,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Car Parts and Accessories",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_93",
    "name": "Starbucks",
    "amount": 19.32,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Coffee Shop",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_94",
    "name": "Lucky Spa Asian Massage",
    "amount": 80,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Personal Care",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_95",
    "name": "ADT",
    "amount": 66.74,
    "type": "expense",
    "date": "2026-03-08T18:29:50.000Z",
    "category": "Security and Safety",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_96",
    "name": "Dept Education Student Ln",
    "amount": 132.52,
    "type": "expense",
    "date": "2026-03-05T18:29:50.000Z",
    "category": "Loans and Mortgages",
    "lenderFlag": true,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_97",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 200,
    "type": "income",
    "date": "2026-03-05T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_98",
    "name": "ZELLE FROM PREET SUKH LLC ON 03/06 REF # WFCT",
    "amount": 38,
    "type": "income",
    "date": "2026-03-05T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_99",
    "name": "MOBILE DEPOSIT : REF NUMBER :813060746695",
    "amount": 702.26,
    "type": "income",
    "date": "2026-03-05T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_100",
    "name": "MOBILE DEPOSIT : REF NUMBER :810060399005",
    "amount": 100,
    "type": "income",
    "date": "2026-03-05T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_101",
    "name": "ZELLE TO SUKHPREET SINGH ON 03/06 REF # WFCT0",
    "amount": 1000,
    "type": "expense",
    "date": "2026-03-05T18:29:50.000Z",
    "category": "Loans and Mortgages",
    "lenderFlag": true,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_102",
    "name": "ZELLE FROM PREET SUKH LLC ON 03/06 REF # WFCT",
    "amount": 38,
    "type": "income",
    "date": "2026-03-05T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_103",
    "name": "Ross Stores",
    "amount": 237.05,
    "type": "expense",
    "date": "2026-03-05T18:29:50.000Z",
    "category": "Clothing and Accessories",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_104",
    "name": "Refuel Petroleu",
    "amount": 72.49,
    "type": "expense",
    "date": "2026-03-05T18:29:50.000Z",
    "category": "Gas Stations",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_105",
    "name": "Staples",
    "amount": 61.12,
    "type": "expense",
    "date": "2026-03-05T18:29:50.000Z",
    "category": "Office Supplies",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_106",
    "name": "California DMV",
    "amount": 0.59,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Government Departments and Agencies",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_107",
    "name": "ONLINE TRANSFER FROM KAUR I WAY2SAVE SAVINGS ",
    "amount": 815,
    "type": "income",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_108",
    "name": "Dept Education",
    "amount": 132.52,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Loans and Mortgages",
    "lenderFlag": true,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_109",
    "name": "California DMV",
    "amount": 28,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Government Departments and Agencies",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_110",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS PLATI",
    "amount": 800,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_111",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 2400,
    "type": "income",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_112",
    "name": "Macy's",
    "amount": 30.51,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_113",
    "name": "ZELLE FROM GURSHARANJIT SINGH ON 03/05 REF # ",
    "amount": 255,
    "type": "income",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_114",
    "name": "WIRE TRANS SVC CHARGE - SEQUENCE: 26030521231",
    "amount": 25,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Wire Transfer",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_115",
    "name": "WIRE TRANS SVC CHARGE - SEQUENCE: 26030514567",
    "amount": 25,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Wire Transfer",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_116",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS CHE",
    "amount": 300,
    "type": "income",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_117",
    "name": "MOBILE DEPOSIT : REF NUMBER :915050414107",
    "amount": 4000,
    "type": "income",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_118",
    "name": "WT FED#02R01 BANK OF AMERICA, N /FTR/BNF=CHHO",
    "amount": 5500,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Wire",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_119",
    "name": "WT 260305-145677 JPMORGAN CHASE BANK /BNF=DRI",
    "amount": 9515.2,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Wire",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_120",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 2000,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_121",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 800,
    "type": "income",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_122",
    "name": "MOBILE DEPOSIT : REF NUMBER :912050206089",
    "amount": 3248.2,
    "type": "income",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_123",
    "name": "MOBILE DEPOSIT : REF NUMBER :415050463997",
    "amount": 1024,
    "type": "income",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_124",
    "name": "Apple",
    "amount": 13.99,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_125",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS PLATI",
    "amount": 300,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_126",
    "name": "Remitly",
    "amount": 257.02,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_127",
    "name": "Raunak Bazar",
    "amount": 22.66,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Supermarkets and Groceries",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_128",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 2000,
    "type": "income",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_129",
    "name": "JCPenney",
    "amount": 63.62,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Department Stores",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_130",
    "name": "BUSINESS TO BUSINESS ACH CAPITAL ONE CRCARDPM",
    "amount": 79,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_131",
    "name": "ATM WITHDRAWAL AUTHORIZED ON 03/05 160 N Main",
    "amount": 800,
    "type": "expense",
    "date": "2026-03-04T18:29:50.000Z",
    "category": "ATM",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_132",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 133,
    "type": "income",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_133",
    "name": "WF PAYMENT MAR 04 29531957 AULAKH SHAHBAJ / K",
    "amount": 237.84,
    "type": "expense",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Payment",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_134",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 120,
    "type": "expense",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_135",
    "name": "MOBILE DEPOSIT : REF NUMBER :717040353753",
    "amount": 1185,
    "type": "income",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_136",
    "name": "MOBILE DEPOSIT : REF NUMBER :015040985499",
    "amount": 1014,
    "type": "income",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_137",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 2000,
    "type": "expense",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_138",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 500,
    "type": "expense",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_139",
    "name": "MOBILE DEPOSIT : REF NUMBER :817040355625",
    "amount": 6930,
    "type": "income",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_140",
    "name": "MOBILE DEPOSIT : REF NUMBER :817040354713",
    "amount": 557,
    "type": "income",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_141",
    "name": "MOBILE DEPOSIT : REF NUMBER :813040846499",
    "amount": 2264,
    "type": "income",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_142",
    "name": "MOBILE DEPOSIT : REF NUMBER :613040843891",
    "amount": 1720,
    "type": "income",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_143",
    "name": "Remitly",
    "amount": 334.1,
    "type": "expense",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_144",
    "name": "Target",
    "amount": 41.57,
    "type": "expense",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Supermarkets and Groceries",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_145",
    "name": "Starbucks",
    "amount": 5.75,
    "type": "expense",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Coffee Shop",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_146",
    "name": "Banana Republic",
    "amount": 248.52,
    "type": "expense",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Clothing and Accessories",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_147",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 2000,
    "type": "income",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_148",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 120,
    "type": "income",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_149",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 500,
    "type": "income",
    "date": "2026-03-03T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_150",
    "name": "ZELLE FROM SOHNAA FOOD ON 03/03 REF # BACEX55",
    "amount": 800,
    "type": "income",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_151",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS PLATI",
    "amount": 1000,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_152",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 200,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_153",
    "name": "ZELLE FROM NEW INDIAN SUPERMARKET ON 03/03 RE",
    "amount": 200,
    "type": "income",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Supermarkets and Groceries",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_154",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS PLATI",
    "amount": 17,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (7275)",
    "variance": "normal"
  },
  {
    "id": "txn_155",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS PLATI",
    "amount": 500,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (7275)",
    "variance": "normal"
  },
  {
    "id": "txn_156",
    "name": "ZELLE TO PRIME MOTOR ON 03/03 REF # WFCT0ZVVZ",
    "amount": 163.2,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_157",
    "name": "WT 260303-157078 JPMORGAN CHASE BANK /BNF=DRI",
    "amount": 21000,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Wire",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_158",
    "name": "WIRE TRANS SVC CHARGE - SEQUENCE: 26030315707",
    "amount": 25,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Wire Transfer",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_159",
    "name": "WIRE TRANS SVC CHARGE - SEQUENCE: 26030312312",
    "amount": 25,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Wire Transfer",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_160",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 1000,
    "type": "income",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_161",
    "name": "ONLINE TRANSFER FROM AULAKH S EVERYDAY CHECKI",
    "amount": 17,
    "type": "income",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_162",
    "name": "ONLINE TRANSFER FROM AULAKH S EVERYDAY CHECKI",
    "amount": 500,
    "type": "income",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_163",
    "name": "MOBILE DEPOSIT : REF NUMBER :412030492297",
    "amount": 775,
    "type": "income",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_164",
    "name": "IMAGINE VISA PMT ePay 260228 IMAGINE VISA PM ",
    "amount": 1000,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Payment",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_165",
    "name": "ZELLE TO KAUR MANDEEP ON 03/03 REF # WFCT0ZVV",
    "amount": 500,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Loans and Mortgages",
    "lenderFlag": true,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_166",
    "name": "WT SEQ123124 PCC LOGISTICS /BNF=Pacific Coast",
    "amount": 1935,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Shops",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_167",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 18,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_168",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 130,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_169",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS CHE",
    "amount": 1500,
    "type": "income",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_170",
    "name": "MOBILE DEPOSIT : REF NUMBER :320030266449",
    "amount": 2129.7,
    "type": "income",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_171",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS PLATI",
    "amount": 1500,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_172",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 18,
    "type": "income",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_173",
    "name": "Netflix",
    "amount": 17.99,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Subscription",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_174",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 130,
    "type": "income",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_175",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 200,
    "type": "income",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_176",
    "name": "BUSINESS TO BUSINESS ACH MERCH BNKCD NSD DEPO",
    "amount": 3.5,
    "type": "expense",
    "date": "2026-03-02T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_177",
    "name": "ZELLE FROM PREET SUKH LLC ON 02/28 REF # WFCT",
    "amount": 222,
    "type": "income",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_178",
    "name": "MOBILE DEPOSIT : REF NUMBER :810020624811",
    "amount": 1779,
    "type": "income",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_179",
    "name": "MOBILE DEPOSIT : REF NUMBER :014020241445",
    "amount": 1000,
    "type": "income",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_180",
    "name": "MOBILE DEPOSIT : REF NUMBER :514280798393",
    "amount": 1009.44,
    "type": "income",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_181",
    "name": "ATM CASH DEPOSIT ON 03/02 160 N Main St Mante",
    "amount": 100,
    "type": "income",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "ATM",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_182",
    "name": "ATM CASH DEPOSIT ON 03/02 160 N Main St Mante",
    "amount": 3935,
    "type": "income",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "ATM",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_183",
    "name": "Starbucks",
    "amount": 5.75,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Coffee Shop",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_184",
    "name": "OpenAI",
    "amount": 20,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Other",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_185",
    "name": "OpenAI",
    "amount": 18.63,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Other",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_186",
    "name": "Apple",
    "amount": 12.49,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_187",
    "name": "Quickquack",
    "amount": 46.99,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Service",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_188",
    "name": "Lucky Spa Asian Massage",
    "amount": 80,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Personal Care",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_189",
    "name": "Habibi's International Market",
    "amount": 78.62,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Supermarkets and Groceries",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_190",
    "name": "Chevron",
    "amount": 54.9,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Gas Stations",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_191",
    "name": "BUSINESS TO BUSINESS ACH CAPITAL ONE MOBILE P",
    "amount": 79,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_192",
    "name": "BUSINESS TO BUSINESS ACH CAPITAL ONE MOBILE P",
    "amount": 1500,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_193",
    "name": "BUSINESS TO BUSINESS ACH CAPITAL ONE MOBILE P",
    "amount": 140,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_194",
    "name": "Westlake Payme",
    "amount": 257.84,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Payment",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_195",
    "name": "Quickquack",
    "amount": 19.99,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Restaurants",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_196",
    "name": "Manteca Tire Wheel",
    "amount": 180,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Auto Tires",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_197",
    "name": "Star India",
    "amount": 36.95,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Restaurants",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_198",
    "name": "Chevron",
    "amount": 68.61,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Gas Stations",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_199",
    "name": "BUSINESS TO BUSINESS ACH CAPITAL ONE MOBILE P",
    "amount": 1500,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_200",
    "name": "ADT",
    "amount": 51.68,
    "type": "expense",
    "date": "2026-03-01T18:29:50.000Z",
    "category": "Security and Safety",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_201",
    "name": "Lucky Spa Asian Massage",
    "amount": 60,
    "type": "expense",
    "date": "2026-02-28T18:29:50.000Z",
    "category": "Personal Care",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_202",
    "name": "ZELLE TO GET IT ON WHEELS IN ON 02/27 REF # W",
    "amount": 400,
    "type": "expense",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_203",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 3000,
    "type": "expense",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_204",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 2000,
    "type": "expense",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_205",
    "name": "MOBILE DEPOSIT : REF NUMBER :611270955665",
    "amount": 6095.9,
    "type": "income",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_206",
    "name": "DEPOSITED ITEMS FEE",
    "amount": 9,
    "type": "expense",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Bank Fees",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_207",
    "name": "OVERDRAFT PROTECTION XFER TO CHECKING",
    "amount": 144.94,
    "type": "expense",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_208",
    "name": "Flagstar",
    "amount": 3365.49,
    "type": "expense",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Wire",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_209",
    "name": "WIRE TRANS SVC CHARGE - SEQUENCE: 26022726894",
    "amount": 25,
    "type": "expense",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Wire Transfer",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_210",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 200,
    "type": "expense",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_211",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 500,
    "type": "expense",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_212",
    "name": "Instant Pmt from RAUNAK BAZAR INC on 02/27 Re",
    "amount": 4000,
    "type": "income",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Payroll",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_213",
    "name": "INTEREST PAYMENT",
    "amount": 0.05,
    "type": "income",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Interest Earned",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_214",
    "name": "Retn",
    "amount": 4000,
    "type": "expense",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_215",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 3000,
    "type": "income",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_216",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 200,
    "type": "income",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_217",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 500,
    "type": "income",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_218",
    "name": "Microsoft",
    "amount": 129.99,
    "type": "expense",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Computers and Electronics",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_219",
    "name": "Hapn",
    "amount": 14.95,
    "type": "expense",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Service",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_220",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 2000,
    "type": "income",
    "date": "2026-02-26T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_221",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS PLATI",
    "amount": 20500,
    "type": "expense",
    "date": "2026-02-25T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (7275)",
    "variance": "normal"
  },
  {
    "id": "txn_222",
    "name": "ZELLE TO SINGH LAKHVIR ON 02/26 REF # WFCT0ZV",
    "amount": 570,
    "type": "expense",
    "date": "2026-02-25T18:29:50.000Z",
    "category": "Supermarkets and Groceries",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_223",
    "name": "ZELLE TO KIRAN NEW NO ON 02/26 REF # WFCT0ZV8",
    "amount": 1500,
    "type": "expense",
    "date": "2026-02-25T18:29:50.000Z",
    "category": "Loans and Mortgages",
    "lenderFlag": true,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_224",
    "name": "OVERDRAFT PROTECTION XFER TO CHECKING",
    "amount": 1491.17,
    "type": "expense",
    "date": "2026-02-25T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_225",
    "name": "WT FED#02R02 JPMORGAN CHASE BAN /FTR/BNF=DRIP",
    "amount": 23307.94,
    "type": "expense",
    "date": "2026-02-25T18:29:50.000Z",
    "category": "Wire",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_226",
    "name": "WIRE TRANS SVC CHARGE - SEQUENCE: 26022622897",
    "amount": 25,
    "type": "expense",
    "date": "2026-02-25T18:29:50.000Z",
    "category": "Wire Transfer",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_227",
    "name": "ONLINE TRANSFER FROM AULAKH S EVERYDAY CHECKI",
    "amount": 20500,
    "type": "income",
    "date": "2026-02-25T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_228",
    "name": "MOBILE DEPOSIT : REF NUMBER :810260550487",
    "amount": 1231,
    "type": "income",
    "date": "2026-02-25T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_229",
    "name": "Habibi's International Market",
    "amount": 18.52,
    "type": "expense",
    "date": "2026-02-25T18:29:50.000Z",
    "category": "Supermarkets and Groceries",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_230",
    "name": "OVERDRAFT PROTECTION XFER FROM DEP ACT",
    "amount": 144.94,
    "type": "income",
    "date": "2026-02-25T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_231",
    "name": "ZELLE TO SHAMSHER SINGH ON 02/25 REF # WFCT0Z",
    "amount": 1373,
    "type": "expense",
    "date": "2026-02-24T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_232",
    "name": "MOBILE DEPOSIT : REF NUMBER :718250909339",
    "amount": 1212,
    "type": "income",
    "date": "2026-02-24T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_233",
    "name": "eDeposit in Branch 02/25/26 04:48:03 PM 160 N",
    "amount": 4000,
    "type": "income",
    "date": "2026-02-24T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_234",
    "name": "ZELLE FROM SUMANDEEP SINGH ON 02/25 REF # BAC",
    "amount": 2000,
    "type": "income",
    "date": "2026-02-24T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_235",
    "name": "ZELLE FROM SINGH ROBINPAL ON 02/25 REF # WFCT",
    "amount": 3500,
    "type": "income",
    "date": "2026-02-24T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_236",
    "name": "Dutch Bros. Coffee",
    "amount": 11.8,
    "type": "expense",
    "date": "2026-02-24T18:29:50.000Z",
    "category": "Coffee Shop",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_237",
    "name": "OVERDRAFT PROTECTION XFER FROM DEP ACT",
    "amount": 1491.17,
    "type": "income",
    "date": "2026-02-24T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_238",
    "name": "Aspire",
    "amount": 458.09,
    "type": "expense",
    "date": "2026-02-24T18:29:50.000Z",
    "category": "Arts and Entertainment",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_239",
    "name": "Wetzel's Pretzels",
    "amount": 1.38,
    "type": "expense",
    "date": "2026-02-24T18:29:50.000Z",
    "category": "Restaurants",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_240",
    "name": "BUSINESS TO BUSINESS ACH ALLY ALLY PAYMT 2602",
    "amount": 1053.98,
    "type": "expense",
    "date": "2026-02-24T18:29:50.000Z",
    "category": "Payment",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_241",
    "name": "Calvin Klein",
    "amount": 235.77,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Clothing and Accessories",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_242",
    "name": "PURCHASE Calvin Klein Livermore CA CARD4977",
    "amount": 235.77,
    "type": "income",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Clothing and Accessories",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_243",
    "name": "Adidas",
    "amount": 373.73,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Clothing and Accessories",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_244",
    "name": "Fossil Outlet Store 7480 Livermore Ca",
    "amount": 190.73,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Clothing and Accessories",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_245",
    "name": "PURCHASE AUTHORIZED ON 02/23 COACH 3828 LIVER",
    "amount": 473.27,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Restaurants",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_246",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS PLATI",
    "amount": 200,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_247",
    "name": "J. Crew Factory",
    "amount": 98.64,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Clothing and Accessories",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_248",
    "name": "ZELLE FROM NEW INDIAN SUPERMARKET ON 02/24 RE",
    "amount": 21000,
    "type": "income",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_249",
    "name": "Tory Burch",
    "amount": 748.7,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Women's Store",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_250",
    "name": "ONLINE TRANSFER TO AULAKH S EVERYDAY CHECKING",
    "amount": 21000,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_251",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 21000,
    "type": "income",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (7275)",
    "variance": "normal"
  },
  {
    "id": "txn_252",
    "name": "WIRE TRANS SVC CHARGE - SEQUENCE: 26022411354",
    "amount": 25,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Wire Transfer",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_253",
    "name": "Toyota",
    "amount": 966.52,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Car Dealers and Leasing",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_254",
    "name": "MOBILE DEPOSIT : REF NUMBER :616240677421",
    "amount": 2129,
    "type": "income",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_255",
    "name": "WT 260224-113546 JPMORGAN CHASE BANK /BNF=DRI",
    "amount": 20045,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Wire",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_256",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 200,
    "type": "income",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_257",
    "name": "MOBILE DEPOSIT : REF NUMBER :516240676815",
    "amount": 2598,
    "type": "income",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_258",
    "name": "MOBILE DEPOSIT : REF NUMBER :516240675951",
    "amount": 192,
    "type": "income",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_259",
    "name": "MOBILE DEPOSIT : REF NUMBER :012240381321",
    "amount": 7257,
    "type": "income",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_260",
    "name": "Habibi's International Market",
    "amount": 18.52,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Supermarkets and Groceries",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_261",
    "name": "Starbucks",
    "amount": 7.04,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Coffee Shop",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_262",
    "name": "Sbarro",
    "amount": 15.05,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Restaurants",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_263",
    "name": "Calvin Klein",
    "amount": 235.77,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Clothing and Accessories",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_264",
    "name": "Paradise Biryani Pointe",
    "amount": 17.22,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Restaurants",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_265",
    "name": "Jamba Juice",
    "amount": 14,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Food and Drink",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_266",
    "name": "Verizon",
    "amount": 134.97,
    "type": "expense",
    "date": "2026-02-23T18:29:50.000Z",
    "category": "Telecommunication Services",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_267",
    "name": "SKECHERS",
    "amount": 49.6,
    "type": "expense",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Shoe Store",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_268",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 1500,
    "type": "income",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_269",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 800,
    "type": "income",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_270",
    "name": "ZELLE TO SUKHPREET SINGH ON 02/21 REF # WFCT0",
    "amount": 1500,
    "type": "expense",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_271",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 500,
    "type": "expense",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_272",
    "name": "MOBILE DEPOSIT : REF NUMBER :710230824627",
    "amount": 1416,
    "type": "income",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_273",
    "name": "MOBILE DEPOSIT : REF NUMBER :610230823549",
    "amount": 10000,
    "type": "income",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_274",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 200,
    "type": "expense",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_275",
    "name": "Lucky Spa Asian Massage",
    "amount": 80,
    "type": "expense",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Personal Care",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_276",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 500,
    "type": "income",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_277",
    "name": "ONLINE TRANSFER FROM SOHNAA FOOD BUSINESS PLA",
    "amount": 200,
    "type": "income",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_278",
    "name": "Lucky Spa Asian Massage",
    "amount": 60,
    "type": "expense",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Personal Care",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_279",
    "name": "La Plaza Market",
    "amount": 115.5,
    "type": "expense",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Supermarkets and Groceries",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_280",
    "name": "BevMo!",
    "amount": 109.02,
    "type": "expense",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Food and Beverage Store",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_281",
    "name": "Cinemark Theatres",
    "amount": 16.49,
    "type": "expense",
    "date": "2026-02-22T18:29:50.000Z",
    "category": "Arts and Entertainment",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_282",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 900,
    "type": "income",
    "date": "2026-02-19T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_283",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS PLATI",
    "amount": 966.52,
    "type": "expense",
    "date": "2026-02-19T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (2141)",
    "variance": "normal"
  },
  {
    "id": "txn_284",
    "name": "ONLINE TRANSFER FROM KAUR I EVERYDAY CHECKING",
    "amount": 966.52,
    "type": "income",
    "date": "2026-02-19T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_285",
    "name": "MOBILE DEPOSIT : REF NUMBER :115200288299",
    "amount": 1301.5,
    "type": "income",
    "date": "2026-02-19T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_286",
    "name": "Toyota",
    "amount": 966.52,
    "type": "expense",
    "date": "2026-02-19T18:29:50.000Z",
    "category": "Car Dealers and Leasing",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_287",
    "name": "MOBILE DEPOSIT : REF NUMBER :514200968203",
    "amount": 3601.58,
    "type": "income",
    "date": "2026-02-19T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_288",
    "name": "Pb Indian Supermar",
    "amount": 19.36,
    "type": "expense",
    "date": "2026-02-19T18:29:50.000Z",
    "category": "Supermarkets and Groceries",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_289",
    "name": "Apple",
    "amount": 7.42,
    "type": "expense",
    "date": "2026-02-19T18:29:50.000Z",
    "category": "Digital Purchase",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_290",
    "name": "ZELLE TO HARBANS SINGH ON 02/19 REF # WFCT0ZT",
    "amount": 100,
    "type": "expense",
    "date": "2026-02-18T18:29:50.000Z",
    "category": "Gas Stations",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_291",
    "name": "ZELLE FROM JRG TRANS INC ON 02/19 REF # WFCT0",
    "amount": 284,
    "type": "income",
    "date": "2026-02-18T18:29:50.000Z",
    "category": "Credit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_292",
    "name": "MOBILE DEPOSIT : REF NUMBER :419190946689",
    "amount": 1000,
    "type": "income",
    "date": "2026-02-18T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_293",
    "name": "ZELLE FROM DESI PIZZA MODESTO INC ON 02/19 RE",
    "amount": 54,
    "type": "income",
    "date": "2026-02-18T18:29:50.000Z",
    "category": "Restaurants",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_294",
    "name": "IMAGINE VISA PMT ePay 260218 IMAGINE VISA PM ",
    "amount": 500,
    "type": "expense",
    "date": "2026-02-18T18:29:50.000Z",
    "category": "Payment",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_295",
    "name": "ONLINE TRANSFER TO SOHNAA FOOD BUSINESS CHECK",
    "amount": 200,
    "type": "expense",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Debit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_296",
    "name": "MOBILE DEPOSIT : REF NUMBER :320180824661",
    "amount": 1979,
    "type": "income",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Deposit",
    "lenderFlag": false,
    "account": "Wells Fargo (8391)",
    "variance": "normal"
  },
  {
    "id": "txn_297",
    "name": "Starbucks",
    "amount": 5.75,
    "type": "expense",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Coffee Shop",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_298",
    "name": "Credit One Bank Payment 260124 50736663 SHAHB",
    "amount": 104.95,
    "type": "expense",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Credit Card",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  },
  {
    "id": "txn_299",
    "name": "Manteca Foods",
    "amount": 7.04,
    "type": "expense",
    "date": "2026-02-17T18:29:50.000Z",
    "category": "Supermarkets and Groceries",
    "lenderFlag": false,
    "account": "Wells Fargo (9271)",
    "variance": "normal"
  }
];

const NEW_LENDERS = ["ZELLE TO KIRAN NEW NO ON 03/11…","Dept Education Student Ln","ZELLE TO SUKHPREET SINGH ON 03…","Dept Education","ZELLE TO KAUR MANDEEP ON 03/03…","ZELLE TO KIRAN NEW NO ON 02/26…"];

const PLATFORM_PCT = 0;
const PLATFORM_NAMES = [];

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
  "revenue advance","business advance","working capital advance",
  // Real-world lenders found in client data
  "parafin capital","kalamatacapital","kalamata capital",
  "ny comm unsecured loan","new york commercial bank","nycb",
  "dime bank","dime community bank",
  "cathay bank loan","cathay bank",
  "sba eidl","sba loan",
  "pnc lending","pnc loan",
  "citizens bank comm loans","northfield bank loan",
  "unsecured loan","comm loans","loan payment to"
];

const SWING_THRESHOLD = 10;
const ACCOUNTS = ["Wells Fargo (9271)","Wells Fargo (8391)","Wells Fargo (2141)","Wells Fargo (7275)"];
const TXN_LIMIT = 200;

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

function LenderTags({ names, newLenders }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? names : names.slice(0, 3);
  const extra = names.length - 3;
  return (
    <div style={{marginTop:"4px",display:"flex",flexWrap:"wrap",gap:"3px",alignItems:"center"}}>
      {visible.map(n=>(
        <span key={n} style={{fontSize:"8px",background:newLenders.includes(n)?"rgba(255,60,60,0.1)":"rgba(10,22,40,0.05)",color:newLenders.includes(n)?"#ff5050":"rgba(10,22,40,0.4)",padding:"1px 5px",borderRadius:"3px",fontFamily:"'DM Mono',monospace",border:newLenders.includes(n)?"1px solid rgba(255,60,60,0.2)":"1px solid transparent"}}>
          {newLenders.includes(n)?"⚠ ":""}{n.length>22?n.slice(0,22)+"…":n}
        </span>
      ))}
      {extra>0&&!expanded&&(
        <span onClick={()=>setExpanded(true)} style={{fontSize:"8px",color:"rgba(27,79,216,0.5)",fontFamily:"'DM Mono',monospace",cursor:"pointer",textDecoration:"underline",padding:"1px 4px"}}>+{extra} more</span>
      )}
      {expanded&&extra>0&&(
        <span onClick={()=>setExpanded(false)} style={{fontSize:"8px",color:"rgba(27,79,216,0.5)",fontFamily:"'DM Mono',monospace",cursor:"pointer",textDecoration:"underline",padding:"1px 4px"}}>show less</span>
      )}
    </div>
  );
}

function RiskGauge({ score }) {
  const clamp = Math.max(0, Math.min(100, score));
  const color = clamp <= 40 ? '#22c55e' : clamp <= 70 ? '#f59e0b' : '#ef4444';
  const label = clamp <= 40 ? 'LOW RISK' : clamp <= 70 ? 'ELEVATED' : 'HIGH RISK';
  const bgColor = clamp <= 40 ? 'rgba(34,197,94,0.08)' : clamp <= 70 ? 'rgba(245,158,11,0.08)' : 'rgba(239,68,68,0.08)';
  // Gauge arc: 180 degrees, from left to right
  const r = 38, cx = 50, cy = 52;
  const startAngle = -180, endAngle = 0;
  const toRad = d => d * Math.PI / 180;
  const arcX = (deg) => cx + r * Math.cos(toRad(deg));
  const arcY = (deg) => cy + r * Math.sin(toRad(deg));
  const needleDeg = -180 + (clamp / 100) * 180;
  const nx = cx + (r - 8) * Math.cos(toRad(needleDeg));
  const ny = cy + (r - 8) * Math.sin(toRad(needleDeg));
  const trackD = `M ${arcX(-180)} ${arcY(-180)} A ${r} ${r} 0 0 1 ${arcX(0)} ${arcY(0)}`;
  const fillAngle = -180 + (clamp / 100) * 180;
  const fillD = `M ${arcX(-180)} ${arcY(-180)} A ${r} ${r} 0 0 1 ${arcX(fillAngle)} ${arcY(fillAngle)}`;
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}>
      <svg width="100" height="58" viewBox="0 0 100 58">
        <path d={trackD} fill="none" stroke="rgba(10,22,40,0.08)" strokeWidth="7" strokeLinecap="round"/>
        <path d={fillD} fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" style={{filter:`drop-shadow(0 0 4px ${color}80)`}}/>
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx={cx} cy={cy} r="3.5" fill={color}/>
        <text x={cx} y={cy-14} textAnchor="middle" fill={color} fontSize="16" fontWeight="800" fontFamily="Syne,sans-serif">{clamp}</text>
      </svg>
      <div style={{fontSize:"8px",fontFamily:"'DM Mono',monospace",letterSpacing:"1.5px",color,marginTop:"-4px"}}>{label}</div>
    </div>
  );
}

export default function DripPlaidWatch() {
  const [activeFilter,setActiveFilter]=useState("all");
  const [activeAccount,setActiveAccount]=useState("all");
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

  // Use only full months for MoM comparisons
  const fullMonths=MONTHLY.filter(m=>!m.partial);
  const currMonth=fullMonths[fullMonths.length-1];
  const prevMonth=fullMonths[fullMonths.length-2];
  const revSwing=prevMonth&&currMonth?((currMonth.revenue-prevMonth.revenue)/prevMonth.revenue*100).toFixed(1):0;
  const expSwing=prevMonth&&currMonth?((currMonth.expenses-prevMonth.expenses)/prevMonth.expenses*100).toFixed(1):0;

  // KPI cards: revenue/expenses/net = last FULL month only
  const kpiRevenue=currMonth?currMonth.revenue:totalRevenue;
  const kpiExpenses=currMonth?currMonth.expenses:totalExpenses;
  const kpiNet=currMonth?currMonth.net:netCashflow;
  const kpiLabel=currMonth?currMonth.month:"Current Period";

  // Lender exposure: combine last full month + partial month (so March MCA payments still show)
  const partialMonth=MONTHLY.find(m=>m.partial);
  const kpiLenderExposure=(currMonth?currMonth.lenderPayments:0)+(partialMonth?partialMonth.lenderPayments:0);
  const lenderKpiLabel=partialMonth?`${kpiLabel} + ${partialMonth.month}`:kpiLabel;

  // ── MCA Stacking Detection ────────────────────────────────────────────────
  const stackingByMonth = MONTHLY.map(m => ({
    month: m.month,
    count: m.lenderNames ? m.lenderNames.length : 0,
    names: m.lenderNames || [],
    partial: m.partial
  }));
  const maxStack = Math.max(...stackingByMonth.map(m => m.count), 0);
  const stackColor = maxStack >= 5 ? '#ef4444' : maxStack >= 3 ? '#f59e0b' : maxStack >= 2 ? '#fb923c' : '#22c55e';
  const stackLabel = maxStack >= 5 ? 'CRITICAL' : maxStack >= 3 ? 'WARNING' : maxStack >= 2 ? 'CAUTION' : 'CLEAR';

  // ── Drip Risk Score ───────────────────────────────────────────────────────
  // 1. MCA Stacking (25%) — based on max simultaneous lenders
  const stackScore = Math.min(100, maxStack <= 1 ? 0 : maxStack === 2 ? 30 : maxStack === 3 ? 55 : maxStack === 4 ? 78 : 100);

  // 2. Revenue Trend (20%) — slope of last 3 full months
  const revMonths = fullMonths.slice(-3).map(m => m.revenue);
  const revTrend = revMonths.length >= 2 ? (revMonths[revMonths.length-1] - revMonths[0]) / (revMonths[0] || 1) : 0;
  const revScore = revTrend >= 0.1 ? 0 : revTrend >= 0 ? 15 : revTrend >= -0.1 ? 35 : revTrend >= -0.25 ? 60 : 100;

  // 3. Expense/Revenue Ratio (15%) — trending toward or above 1.0
  const expRatios = fullMonths.slice(-3).map(m => m.revenue > 0 ? m.expenses / m.revenue : 1);
  const avgRatio = expRatios.length ? expRatios.reduce((a,b)=>a+b,0)/expRatios.length : 1;
  const ratioScore = avgRatio <= 0.7 ? 0 : avgRatio <= 0.85 ? 20 : avgRatio <= 0.95 ? 45 : avgRatio <= 1.05 ? 70 : 100;

  // 4. Net Cashflow (10%) — consecutive deficit months
  const deficitMonths = fullMonths.filter(m => m.net < 0).length;
  const cashScore = deficitMonths === 0 ? 0 : deficitMonths === 1 ? 25 : deficitMonths === 2 ? 55 : 100;

  // 5. New Lenders (10%) — new MCAs appearing recently
  const newLenderScore = NEW_LENDERS.length === 0 ? 0 : NEW_LENDERS.length === 1 ? 40 : NEW_LENDERS.length === 2 ? 70 : 100;

  // 6. Platform Concentration (20%) — % revenue from Amazon/Shopify etc
  const platformScore = PLATFORM_PCT <= 20 ? 0 : PLATFORM_PCT <= 40 ? 20 : PLATFORM_PCT <= 60 ? 45 : PLATFORM_PCT <= 80 ? 70 : 100;

  const riskScore = Math.round(
    stackScore * 0.25 +
    revScore * 0.20 +
    ratioScore * 0.15 +
    cashScore * 0.10 +
    newLenderScore * 0.10 +
    platformScore * 0.20
  );

  const riskSignals = [
    { label: 'MCA Stacking', score: stackScore, weight: '25%', detail: `${maxStack} simultaneous lender${maxStack!==1?'s':''}` },
    { label: 'Revenue Trend', score: revScore, weight: '20%', detail: `${revTrend>=0?'+':''}${(revTrend*100).toFixed(0)}% over 3mo` },
    { label: 'Expense Ratio', score: ratioScore, weight: '15%', detail: `${(avgRatio*100).toFixed(0)}¢ expenses per $1 revenue` },
    { label: 'Net Cashflow', score: cashScore, weight: '10%', detail: `${deficitMonths} deficit month${deficitMonths!==1?'s':''}` },
    { label: 'New Lenders', score: newLenderScore, weight: '10%', detail: `${NEW_LENDERS.length} new in 60 days` },
    { label: 'Platform Risk', score: platformScore, weight: '20%', detail: `${PLATFORM_PCT}% platform revenue` },
  ];

  const filtered=TRANSACTIONS.filter(t=>{
    if(activeAccount!=="all"&&t.account!==activeAccount) return false;
    if(activeFilter==="income")return t.type==="income";
    if(activeFilter==="expense")return t.type==="expense";
    if(activeFilter==="lender")return t.lenderFlag;
    return true;
  }).slice(0,TXN_LIMIT);
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
            <div style={{fontSize:"13px",fontWeight:600,color:"#0A1628",marginTop:"4px",letterSpacing:"-0.2px"}}>Sohnaa Foods   March</div>
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

      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"12px",marginBottom:"16px"}}>
        {[
          {label:"Revenue",value:fmt(kpiRevenue),sub:`${revSwing>0?"▲":"▼"} ${Math.abs(revSwing)}% vs prior month`,subColor:revSwing>0?"#4B9FFF":"#ff6b6b",spark:MONTHLY.filter(m=>!m.partial).map(m=>m.revenue),sparkColor:"#4B9FFF",accent:"#4B9FFF",border:"rgba(75,159,255,0.2)",periodLabel:kpiLabel},
          {label:"Expenses",value:fmt(kpiExpenses),sub:`${expSwing>0?"▲":"▼"} ${Math.abs(expSwing)}% vs prior month`,subColor:expSwing>0?"#ff6b6b":"#4B9FFF",spark:MONTHLY.filter(m=>!m.partial).map(m=>m.expenses),sparkColor:"#ff6b6b",accent:"#ff6b6b",border:"rgba(255,107,107,0.2)",periodLabel:kpiLabel},
          {label:"Net Cashflow",value:`${kpiNet>=0?"+":""}${fmt(Math.abs(kpiNet))}`,sub:kpiNet>=0?"Positive position":"Deficit — review",subColor:kpiNet>=0?"#4B9FFF":"#ff6b6b",spark:MONTHLY.filter(m=>!m.partial).map(m=>Math.abs(m.net)+1),sparkColor:"#7B5FFF",accent:"#7B5FFF",border:"rgba(123,95,255,0.2)",periodLabel:kpiLabel},
          {label:"Lender Exposure",value:fmt(kpiLenderExposure),sub:`${lenderTxns.length} lender payments flagged`,subColor:"#ffaa44",spark:MONTHLY.map(m=>m.lenderPayments+1),sparkColor:"#ffaa44",accent:"#ffaa44",border:unackedAlerts.length>0?"rgba(255,170,50,0.4)":"rgba(255,170,50,0.15)",periodLabel:lenderKpiLabel},
        ].map((card,i)=>(
          <div key={i} style={{background:"#ffffff",border:`1px solid ${card.border}`,borderRadius:"12px",padding:"16px 18px",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,right:0,width:"70px",height:"70px",background:`radial-gradient(circle at 100% 0%,${card.accent}20,transparent 70%)`}}/>
            <div style={{position:"absolute",bottom:6,right:8,opacity:0.04}}><WatchFace size={40} animate={false}/></div>
            <div style={{fontSize:"10px",color:"rgba(27,79,216,0.6)",fontFamily:"'DM Mono',monospace",letterSpacing:"0.8px",marginBottom:"7px",textTransform:"uppercase"}}>{card.label}</div>
            <div style={{fontSize:"24px",fontFamily:"'Syne',sans-serif",fontWeight:800,color:card.accent,marginBottom:"3px",letterSpacing:"-0.5px"}}>{card.value}</div>
            <div style={{fontSize:"11px",color:card.subColor,marginBottom:"6px"}}>{card.sub}</div>
            <div style={{fontSize:"9px",color:"rgba(27,79,216,0.35)",fontFamily:"'DM Mono',monospace",marginBottom:"6px"}}>{card.periodLabel}</div>
            <Sparkline data={card.spark} color={card.sparkColor} width={100} height={32}/>
          </div>
        ))}

        {/* ── Drip Risk Score Card ── */}
        <div style={{background:"#ffffff",border:`1px solid ${riskScore<=40?"rgba(34,197,94,0.2)":riskScore<=70?"rgba(245,158,11,0.25)":"rgba(239,68,68,0.3)"}`,borderRadius:"12px",padding:"14px 16px",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:0,right:0,width:"70px",height:"70px",background:riskScore<=40?"radial-gradient(circle at 100% 0%,rgba(34,197,94,0.12),transparent 70%)":riskScore<=70?"radial-gradient(circle at 100% 0%,rgba(245,158,11,0.12),transparent 70%)":"radial-gradient(circle at 100% 0%,rgba(239,68,68,0.12),transparent 70%)"}}/>
          <div style={{fontSize:"10px",color:"rgba(27,79,216,0.6)",fontFamily:"'DM Mono',monospace",letterSpacing:"0.8px",marginBottom:"4px",textTransform:"uppercase"}}>Drip Risk Score</div>
          <RiskGauge score={riskScore}/>
          <div style={{marginTop:"8px",display:"flex",flexDirection:"column",gap:"3px"}}>
            {riskSignals.map((s,i)=>(
              <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:"8px",color:"rgba(10,22,40,0.45)",fontFamily:"'DM Mono',monospace"}}>{s.label}</span>
                <div style={{display:"flex",alignItems:"center",gap:"4px"}}>
                  <div style={{width:"36px",height:"3px",background:"rgba(10,22,40,0.06)",borderRadius:"2px",overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${s.score}%`,background:s.score<=40?"#22c55e":s.score<=70?"#f59e0b":"#ef4444",borderRadius:"2px"}}/>
                  </div>
                  <span style={{fontSize:"7px",color:"rgba(10,22,40,0.3)",fontFamily:"'DM Mono',monospace",width:"18px",textAlign:"right"}}>{s.weight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MCA Stacking Alert Panel ── */}
      <div style={{background:"#ffffff",border:`1px solid ${stackColor}30`,borderRadius:"12px",padding:"14px 18px",marginBottom:"14px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
            <span style={{fontSize:"12px"}}>🔗</span>
            <span style={{fontSize:"10px",fontFamily:"'DM Mono',monospace",letterSpacing:"1px",color:"rgba(10,22,40,0.5)"}}>MCA STACKING MONITOR</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
            <div style={{width:"7px",height:"7px",borderRadius:"50%",background:stackColor}}/>
            <span style={{fontSize:"9px",fontFamily:"'DM Mono',monospace",color:stackColor,letterSpacing:"1px"}}>{stackLabel}</span>
          </div>
        </div>
        <div style={{display:"flex",gap:"6px",overflowX:"auto"}}>
          {stackingByMonth.map((m,i)=>{
            const c = m.count>=5?"#ef4444":m.count>=3?"#f59e0b":m.count>=2?"#fb923c":"#22c55e";
            return (
              <div key={i} style={{flex:"0 0 auto",minWidth:"80px",background:m.count>=2?`${c}10`:"rgba(10,22,40,0.02)",border:`1px solid ${m.count>=2?c+"30":"rgba(10,22,40,0.06)"}`,borderRadius:"8px",padding:"8px",textAlign:"center"}}>
                <div style={{fontSize:"8px",color:"rgba(10,22,40,0.4)",fontFamily:"'DM Mono',monospace",marginBottom:"4px"}}>{m.month}{m.partial?" *":""}</div>
                <div style={{fontSize:"22px",fontFamily:"'Syne',sans-serif",fontWeight:800,color:c,lineHeight:1}}>{m.count}</div>
                <div style={{fontSize:"7px",color:c,fontFamily:"'DM Mono',monospace",marginTop:"2px",marginBottom:"5px"}}>lender{m.count!==1?"s":""}</div>
                {m.names.slice(0,2).map(n=>(
                  <div key={n} style={{fontSize:"7px",color:"rgba(10,22,40,0.4)",fontFamily:"'DM Mono',monospace",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"76px"}}>{n}</div>
                ))}
                {m.names.length>2&&<div style={{fontSize:"7px",color:c,fontFamily:"'DM Mono',monospace"}}>+{m.names.length-2} more</div>}
              </div>
            );
          })}
        </div>
        {PLATFORM_PCT>0&&(
          <div style={{marginTop:"10px",paddingTop:"10px",borderTop:"1px solid rgba(10,22,40,0.06)",display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
            <span style={{fontSize:"9px",fontFamily:"'DM Mono',monospace",color:"rgba(10,22,40,0.4)",letterSpacing:"1px"}}>PLATFORM CONCENTRATION:</span>
            <span style={{fontSize:"9px",fontFamily:"'DM Mono',monospace",color:PLATFORM_PCT>=60?"#ef4444":PLATFORM_PCT>=40?"#f59e0b":"#22c55e",fontWeight:600}}>{PLATFORM_PCT}% via marketplace</span>
            {PLATFORM_NAMES.slice(0,3).map(n=>(
              <span key={n} style={{fontSize:"8px",background:"rgba(27,79,216,0.05)",color:"rgba(27,79,216,0.5)",padding:"1px 6px",borderRadius:"3px",fontFamily:"'DM Mono',monospace"}}>{n}</span>
            ))}
          </div>
        )}
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
            <div style={{display:"flex",flexDirection:"column",gap:"5px",alignItems:"flex-end"}}>
              {ACCOUNTS.length>1&&(
                <div style={{display:"flex",gap:"4px",flexWrap:"wrap",justifyContent:"flex-end"}}>
                  {["all",...ACCOUNTS].map(a=>(
                    <button key={a} className="filter-btn" onClick={()=>setActiveAccount(a)} style={{padding:"2px 8px",borderRadius:"4px",fontSize:"9px",fontFamily:"'DM Mono',monospace",background:activeAccount===a?"#0A1628":"rgba(10,22,40,0.04)",color:activeAccount===a?"#fff":"rgba(10,22,40,0.45)",border:activeAccount===a?"none":"1px solid rgba(10,22,40,0.12)",fontWeight:activeAccount===a?600:400}}>
                      {a==="all"?"ALL ACCOUNTS":a.length>18?a.slice(0,18)+"…":a}
                    </button>
                  ))}
                </div>
              )}
              <div style={{display:"flex",gap:"5px"}}>
                {["all","income","expense","lender"].map(f=>(
                  <button key={f} className="filter-btn" onClick={()=>setActiveFilter(f)} style={{padding:"3px 10px",borderRadius:"5px",fontSize:"10px",fontFamily:"'DM Mono',monospace",background:activeFilter===f?(f==="lender"?"#ff5050":"#1B4FD8"):"rgba(27,79,216,0.07)",color:activeFilter===f?"#fff":"rgba(27,79,216,0.6)",border:activeFilter===f?"none":"1px solid rgba(27,79,216,0.18)",fontWeight:activeFilter===f?600:400}}>
                    {f==="lender"?"⚠ LENDERS":f.toUpperCase()}
                  </button>
                ))}
              </div>
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
                    <div style={{fontSize:"10px",color:"rgba(75,159,255,0.35)",fontFamily:"'DM Mono',monospace",marginTop:"1px"}}>{txn.category} · {txn.date}{txn.account&&ACCOUNTS.length>1?<span style={{marginLeft:"6px",background:"rgba(10,22,40,0.05)",border:"1px solid rgba(10,22,40,0.08)",borderRadius:"3px",padding:"0px 5px",fontSize:"8px",color:"rgba(10,22,40,0.4)"}}>{txn.account.length>16?txn.account.slice(0,16)+"…":txn.account}</span>:""}</div>
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
                      <LenderTags names={m.lenderNames} newLenders={NEW_LENDERS}/>
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
            const NON_BUSINESS = /^checks*#/i;
            const topOut=Object.entries(TRANSACTIONS.filter(t=>t.type==="expense"&&!t.lenderFlag&&!NON_BUSINESS.test(t.name)&&t.category!=="ATM"&&t.category!=="Withdrawal"&&t.category!=="Check"&&t.category!=="Internal Account Transfer").reduce((acc,t)=>{const k=t.name.length>28?t.name.slice(0,28)+"…":t.name;acc[k]=(acc[k]||0)+t.amount;return acc;},{})).sort((a,b)=>b[1]-a[1]).slice(0,5);
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
          <span style={{fontSize:"10px",color:"rgba(75,159,255,0.2)",fontFamily:"'DM Mono',monospace"}}>DRIP'S PLAIDWATCH · Sohnaa Foods   March · {TRANSACTIONS.length} TRANSACTIONS</span>
        </div>
        <div style={{display:"flex",gap:"5px",alignItems:"center"}}>
          <div style={{width:"4px",height:"4px",borderRadius:"50%",background:"#4B9FFF",animation:"alertBlink 2.5s infinite"}}/>
          <span style={{fontSize:"10px",color:"rgba(75,159,255,0.2)",fontFamily:"'DM Mono',monospace"}}>LIVE</span>
        </div>
      </div>
    </div>
  );
}
