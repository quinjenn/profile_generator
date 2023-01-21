const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What do you think of Node.js? ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question("What's your name? ", (answer) => {
    console.log(`Hi ${answer}`);

    rl.question("What's an activity you like doing? ", (answer) => {
      console.log(`${answer} is a great activty!`);

      rl.question("What do you listen to while doing that? ", (answer) => {
        console.log(`${answer} is a good way to get pumped up!`);

        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
          (answer) => {
            console.log(`${answer} is an importsnt meal of your day!`);

            rl.question(
              "What's your favourite thing to eat for that meal? ",
              (answer) => {
                console.log(`Yummm ${answer}`);

                rl.question(
                  "Which sport is your absolute favourite? ",
                  (answer) => {
                    console.log(`${answer} is fun!`);

                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at! ",
                      (answer) => {
                        console.log(`No way! ${answer} is awesome!`);
                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  });
});
