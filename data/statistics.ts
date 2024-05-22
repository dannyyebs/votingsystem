"use server";

import db from "@/lib/db";

export const votesForHerbert =async () =>await  db.user.count({
  where: {
    chairperson: {
      contains: "Herbert",
    },
  },
});

export const votesForEbenezer = db.user.count({
  where: {
    chairperson: {
      contains: "Ebenezer",
    },
  },
});

export const votesForEmmanuel = db.user.count({
  where: {
    viceChairperson: {
      contains: "Emmanuel",
    },
  },
});

export const votesAgainstEmmanuel = db.user.count({
  where: {
    NOT: {
      viceChairperson: {
        contains: "Emmanuel",
      },
    },
  },
});

export const votesForElfreda = db.user.count({
  where: {
    executiveMember: {
      contains: "Elfreda",
    },
  },
});

export const votesForChristian = db.user.count({
  where: {
    executiveMember: {
      contains: "Christian",
    },
  },
});

export const votesForMartin = db.user.count({
  where: {
    treasurer: {
      contains: "Martin",
    },
  },
});

export const votesAgainstMartin = db.user.count({
  where: {
    NOT: {
      treasurer: {
        contains: "Martin",
      },
    },
  },
});

export const votesForBaah = db.user.count({
  where: {
    financialSecretary: {
      contains: "Baah",
    },
  },
});

export const votesAgainstBaah = db.user.count({
  where: {
    NOT: {
      financialSecretary: {
        contains: "Baah",
      },
    },
  },
});
