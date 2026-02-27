export interface Story {
  name: string;
  age: number;
  quote: string;
  body: string[];
  reflection: string;
}

export const stories: Story[] = [
  {
    name: "Aarav",
    age: 9,
    quote: "I thought being scared meant something was wrong with me.",
    body: [
      `I didn't know the word "anxiety" when I was younger — I only knew the feeling. My chest would feel tight, my stomach would hurt, and my mind would tell me something bad was about to happen. Even normal days felt dangerous. School mornings were the hardest. I would cling to my parents, afraid that once they left, I wouldn't be okay.`,
      `I remember looking at other kids and wondering why they seemed fine. Why didn't their hearts race like mine? Why didn't they want to run home? I felt confused and embarrassed. Sometimes I thought being scared meant I was weak or different in a bad way.`,
      `With help, I slowly learned that anxiety wasn't a flaw — it was my brain trying too hard to protect me. Instead of fighting it or hiding from it, I learned small ways to face it. Some days that meant staying in class five minutes longer. Other days it meant just breathing through the fear without running away.`,
      `Now I understand something important: courage doesn't mean not feeling scared. It means staying, even when you are. And every time I stay, I grow a little stronger.`,
    ],
    reflection: "When have you stayed, even when you felt afraid?",
  },
  {
    name: "Daniel",
    age: 38,
    quote: "I believed worrying meant I was being responsible.",
    body: [
      `For years, I believed worrying was my job. If I thought through every possible problem, prepared for every outcome, and stayed mentally alert at all times, I could prevent things from going wrong. Anxiety felt productive. It felt responsible.`,
      `But over time, I noticed how exhausted I was. My mind never stopped. Even during vacations or family dinners, I was mentally planning, predicting, or preventing. Relaxing felt unsafe. If I stopped worrying, I felt like I was being careless.`,
      `Eventually, I realized anxiety wasn't protecting me — it was controlling me. Therapy helped me understand that uncertainty is part of life, and no amount of worrying can eliminate it. I began practicing noticing my thoughts without automatically believing them.`,
      `Letting go of constant control felt uncomfortable at first. But slowly, space opened up. I started making decisions based on what mattered to me — not just what felt safest. Anxiety still shows up, but it no longer runs the show.`,
    ],
    reflection: "Where are you mistaking worry for responsibility?",
  },
  {
    name: "Rhea",
    age: 22,
    quote: "I kept waiting to feel confident before living.",
    body: [
      `Anxiety sounded like a voice in my head that never stopped criticizing me. It told me I would embarrass myself, say the wrong thing, or be judged. After conversations, I would replay everything I said. Before events, I would imagine worst-case scenarios.`,
      `From the outside, I looked confident. Inside, I felt constantly on edge. I kept waiting to feel ready — waiting for confidence to magically arrive so I could finally speak freely, apply for opportunities, or put myself out there.`,
      `But confidence never came first.`,
      `What changed my life was realizing I didn't have to eliminate anxiety to move forward. I could bring it with me. I started taking small risks — raising my hand, attending events, speaking up even if my voice shook.`,
      `Every time I acted despite fear, something shifted. I stopped measuring myself by how calm I felt, and started measuring myself by how brave I was willing to be.`,
    ],
    reflection: "What would you try if you didn't wait to feel completely ready?",
  },
  {
    name: "Margaret",
    age: 62,
    quote: "I didn't expect anxiety to begin at this stage of life.",
    body: [
      `I thought anxiety belonged to younger people. I didn't expect it to appear after retirement, when life had finally slowed down. But when the busy years ended, my thoughts became louder. Every physical sensation felt alarming. Every unknown felt dangerous.`,
      `I felt embarrassed for struggling. At my age, I believed I should have everything figured out. I searched constantly for reassurance — from doctors, from family, from online articles. The reassurance helped briefly, but the fear always returned.`,
      `Eventually, I understood that reassurance was feeding the cycle. With guidance, I began practicing sitting with uncertainty instead of chasing certainty. I rebuilt routines. I reconnected with hobbies. I slowly allowed discomfort without immediately trying to fix it.`,
      `Today, anxiety still visits sometimes. But it no longer defines me. I've learned that growth doesn't have an expiration date — and courage can appear at any age.`,
    ],
    reflection: "What part of you is still growing?",
  },
];
