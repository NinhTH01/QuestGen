export const data: any = [
  {
    answers: [
      "Due to government regulations",
      "Due to security risks",
      "Due to environmental concerns",
      "Due to a decline in Bitcoin's value",
    ],
    correctAnswerIndices: [2],
    correctAnswers: ["Due to environmental concerns"],
    question: "Why is Tesla no longer accepting payments in Bitcoin?",
  },
  {
    answers: ["Dogecoin", "Bitcoin", "Ripple", "Ethereum"],
    correctAnswerIndices: [0],
    correctAnswers: ["Dogecoin"],
    question:
      "Which cryptocurrency rallied by about 20 percent after Elon Musk's tweet?",
  },
  {
    answers: [
      "Bitcoin's value remained unchanged",
      "Bitcoin's value increased significantly",
      "Bitcoin's value reached an all-time high",
      "Bitcoin's value hit a two-month low",
    ],
    correctAnswerIndices: [3],
    correctAnswers: ["Bitcoin's value hit a two-month low"],
    question: "How did Elon Musk's tweet about Bitcoin impact its value?",
  },
  {
    answers: [
      "High transaction fees",
      "Limited scalability of blockchain technology",
      "Lack of global acceptance",
      "Rapidly increasing use of fossil fuels for mining and transaction",
    ],
    correctAnswerIndices: [3],
    correctAnswers: [
      "Rapidly increasing use of fossil fuels for mining and transaction",
    ],
    question:
      "What was one of the concerns expressed by Tesla regarding Bitcoin?",
  },
  {
    answers: ["Ripple", "Dogecoin", "Ethereum", "Bitcoin"],
    correctAnswerIndices: [1],
    correctAnswers: ["Dogecoin"],
    question:
      "Which cryptocurrency did Elon Musk express strong support for, according to the article?",
  },
];

export const bloomData: any = {
  text: "Elon Musk has shown again he can influence the digital currency market with just his tweets. After saying that his electric vehicle-making company Tesla will not accept payments in Bitcoin because of environmental concerns, he tweeted that he was working with developers of Dogecoin to improve system transaction efficiency. \n\nFollowing the two distinct statements from him, the world's largest cryptocurrency hit a two-month low, while Dogecoin rallied by about 20 percent. The SpaceX CEO has in recent months often tweeted in support of Dogecoin, but rarely for Bitcoin.  In a recent tweet, Musk put out a statement from Tesla that it was concerned about the rapidly increasing use of fossil fuels for Bitcoin (price in India) mining and transaction, and hence was suspending vehicle purchases using the cryptocurrency. \n\nA day later he again tweeted saying, To be clear, I strongly believe in crypto, but it can't drive a massive increase in fossil fuel use, especially coal. It triggered a downward spiral for Bitcoin value but the cryptocurrency has stabilised since.  A number of Twitter users welcomed Musk's statement. One of them said it's time people started realising that Dogecoin is here to stay and another referred to Musk's previous assertion that crypto could become the world's future currency.",
  quesAndPair: [
    {
      answers: ["Bitcoin "],
      context: "Remember - Level 1",
      correct_answer: "Bitcoin ",
      question: "What is the world's largest cryptocurrency? ",
    },
    {
      answers: [
        "Dogecoin can be used to improve system transaction efficiency by reducing the amount of time it takes to process transactions and increasing the number of transactions that can be processed at once.",
      ],
      context: "Apply - Level 3",
      correct_answer:
        "Dogecoin can be used to improve system transaction efficiency by reducing the amount of time it takes to process transactions and increasing the number of transactions that can be processed at once.",
      question:
        "How can Dogecoin be used to improve system transaction efficiency?",
    },
    {
      answers: [
        "Tesla's decision to suspend vehicle purchases using Bitcoin has caused the cryptocurrency's value to decrease.",
      ],
      context: "Analyze - Level 4",
      correct_answer:
        "Tesla's decision to suspend vehicle purchases using Bitcoin has caused the cryptocurrency's value to decrease.",
      question:
        "How has Tesla's decision to suspend vehicle purchases using Bitcoin impacted the cryptocurrency's value?",
    },
    {
      answers: [
        "Elon Musk's statements have implications for the future of digital currencies, such as increased focus on sustainability and the potential for Dogecoin to become a mainstream currency.",
      ],
      context: "Evaluate - Level 5",
      correct_answer:
        "Elon Musk's statements have implications for the future of digital currencies, such as increased focus on sustainability and the potential for Dogecoin to become a mainstream currency.",
      question:
        "What implications will Elon Musk's statements have on the future of digital currencies? ",
    },
    {
      answers: [
        "A plan to increase the sustainable use of digital currency could include increased research into renewable energy sources for mining, the development of more efficient blockchain technologies, and increased regulation of digital currency exchanges.",
      ],
      context: "Create - Level 6",
      correct_answer:
        "A plan to increase the sustainable use of digital currency could include increased research into renewable energy sources for mining, the development of more efficient blockchain technologies, and increased regulation of digital currency exchanges.",
      question:
        "Devise a plan to increase the sustainable use of digital currency.",
    },
  ],
};

export const similiarData = {
  text: "Two trains are on the same track a distance 100 km apart heading towards one another, each at a speed of 50 km/h. A fly starting out at the front of one train, flies towards the other at a speed of 75 km/h. Upon reaching the other train, the fly turns around and continues towards the first train. How many kilometers does the fly travel before getting squashed in the collision of the two trains?",
  quesAndPair: [
    {
      question:
        "Two cars are on the same road a distance 120 miles apart heading towards one another, each at a speed of 30 mph. A bird starting out at the front of one car, flies towards the other at a speed of 45 mph. Upon reaching the other car, the bird turns around and continues towards the first car. How many miles does the bird travel before getting crushed in the collision of the two cars?",
    },
    {
      question:
        "Two ships are on the same river a distance 200 km apart heading towards one another, each at a speed of 25 km/h. A seagull starting out at the front of one ship, flies towards the other at a speed of 50 km/h. Upon reaching the other ship, the seagull turns around and continues towards the first ship. How many kilometers does the seagull travel before getting caught in the collision of the two ships?",
    },
    {
      question:
        "Two cars are on the same road a distance 200 miles apart heading towards one another, each at a speed of 35 mph. A bee starting out at the front of one car, flies towards the other at a speed of 55 mph. Upon reaching the other car, the bee turns around and continues towards the first car. How many miles does the bee travel before getting smashed in the collision of the two cars?",
    },
  ],
};
