// Reads the public Duolingo profile server-side (Duolingo sends no CORS headers)
// and returns only what the site shows: streak, German XP and when the streak began.
const USERNAME = "MuttonKebab007";
const ENDPOINT = `https://www.duolingo.com/2017-06-30/users?username=${USERNAME}`;

interface Course {
  learningLanguage: string;
  title: string;
  xp: number;
}

export const handler = async () => {
  try {
    const res = await fetch(ENDPOINT, { headers: { "User-Agent": "Mozilla/5.0 (portfolio streak widget)" } });
    if (!res.ok) throw new Error(`Duolingo ${res.status}`);
    const json = await res.json();
    const user = json?.users?.[0];
    if (!user) throw new Error("No user");

    const german = (user.courses as Course[] | undefined)?.find((c) => c.learningLanguage === "de");
    const body = {
      streak: Number(user.streak ?? user.streakData?.currentStreak?.length ?? 0),
      since: user.streakData?.currentStreak?.startDate ?? null,
      xp: german?.xp ?? null,
    };

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        // An hour at the edge is plenty for a number that moves once a day.
        "Cache-Control": "public, max-age=900, s-maxage=3600",
      },
      body: JSON.stringify(body),
    };
  } catch (error) {
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: String(error) }),
    };
  }
};
