# Bunjo

#### Technologies

- [ ] Typescript
- [ ] Remix
- [ ] Prisma
- [ ] OPENAI API

#### Model I used (https://beta.openai.com/docs/api-reference/models/list)
```c
 try {
    const response = await fetch(
      "https://api.openai.com/v1/engines/text-davinci-002/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_KEY}`,
        },
        body: JSON.stringify({
          prompt: body.prompt,
          max_tokens: Number(body.tokens),
          temperature: 0.9,
          top_p: 1,
          frequency_penalty: 0.52,
          presence_penalty: 0.9,
          n: 1,
          best_of: 2,
          stream: false,
          logprobs: null,
        }),
      }
    );
```

#### Next Implementations

- [ ] Add Code  (https://beta.openai.com/docs/guides/code/introduction)


 ![AI_Screenshot_1](https://user-images.githubusercontent.com/85137475/174498430-5e9eafcd-d281-48be-b7f4-be80468b07f0.png)

![AI_SCREENSHOT_2](https://user-images.githubusercontent.com/85137475/174498432-2b447a9d-bac3-41d3-840c-861188aac4ba.png)

![AI_SCREENSHOT_3](https://user-images.githubusercontent.com/85137475/174498434-9a193d51-1a2e-4e99-a4e3-6f18e5a54e12.png)
