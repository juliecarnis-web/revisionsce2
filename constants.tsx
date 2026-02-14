
import React from 'react';
import { SubjectId, SubSubjectId } from './types';

export const TEACHER_PASSWORD = 'HPforever';

export const COLORS: Record<string, string> = {
  'francais': 'bg-blue-600 hover:bg-blue-700',
  'maths': 'bg-red-600 hover:bg-red-700',
  'etude-langue': 'bg-emerald-800', // Vert foncé
  'vocabulaire': 'bg-[#FF00FF]', // Rose fuchsia
  'orthographe': 'bg-[#00008B]', // Bleu profond
  'lecture': 'bg-orange-500', // Orange vif
  'production': 'bg-sky-400', // Bleu ciel
  'numeration': 'bg-red-500', // Rouge vif
  'calcul': 'bg-[#800020]', // Bordeaux profond
  'mesure': 'bg-[#0000FF]', // Bleu primaire
  'geometrie': 'bg-[#4CAF50]', // Vert prairie
};

export const SUBJECT_HIERARCHY = {
  francais: {
    label: 'Français',
    color: 'bg-blue-600',
    icon: 'https://lh3.googleusercontent.com/sitesv/APaQ0ST32vPHFspC9914bM0swiuuMPSan2sfQRDmHzvcJIAh5K1Bt9l87zwebhiJ0lgfzQCP2EnnG_3_w__kILQIeDeFUpSX5bLo1BTyFHL3Gjnv9_PlCeM3i5gNpAgZc3kXu0YfdomXYtud3bk7xAUMA4Hvh0PrrJqjhpoRhhwSL2-UGRJ8r5Ybm0XpUgttloPiH7hVCOsYwUT7m6j1I7ErVNHLSKb9AUi9Qt1N1nw=w1280',
    subSubjects: [
      { id: 'etude-langue', label: 'Étude de la langue', icon: 'https://lh3.googleusercontent.com/sitesv/APaQ0SR0NeGRWZWWnxyumLIJd42Pyk_RSLZeDIFqzNzhVqvXp5--qkpyq6XMPlCyzO8z69AFXPgikoiylhOjLtXE8IHnA-Uu2urX6ans98e0XByzE3vqTO8acHpIeTggDFsKDJ6Tpn2y7K2wPlRFNxvMMtZpGsTkWQz0bUSLjVnihRxE0NJqKNWelezfiSqkjUMxgvM4FB6Hlq1AEJ4TFMZqBTzZqeGczSyOCLKRHEM=w1280' },
      { id: 'vocabulaire', label: 'Vocabulaire', icon: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQKMsM-YG2umZAoj8n7UQssP-amxha3SZJSP-ZI-b4nyR0W85E6S4WbaNTzqlJmDnMDSk7Dp-8IhcWLJQO8st-Z7vcinn8xDR-Z9WwzaoAnqXUhyPeeQkPLP0E_qulvORljGycnAvwuuLRx-_zjbQtrgNIVkAE1yIsqcIHHNcxrHE914KpDkm6Z6xvAV2v1jQ6R0UCCoD9ngPC10PTK7WEUCqnzgOhn1w-63r8=w1280' },
      { id: 'orthographe', label: 'Orthographe', icon: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRojd9j56EhFW5_Mr22X4Kot0MNSvJgZ1agRdHVKgG39fX8AqoXZGlR-DQrGMOriKjH-4_NrfRUTo3nx2uxv_nzdDpKW-FoSM6WJLrkc30dzOZWwO9IvlcWvj7gBLuIzptnHqvrVH-TC3gUF_WLgpLOjz6kUm0EwGDyqMCw0onsEiZyhbvn9yr94AVZ4XMOTSbDf2NALXGQ3ZV7pUu-vhRyXF8Iv33Bs8uu-1g=w1280' },
      { id: 'lecture', label: 'Lecture-compréhension', icon: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRzQrHS39WXSIQaeoWOWbtKYzs624JaZz4vpc6JkiL5OzAcc_a6NGmiAlBH_rKNtMC7PivvxrWE0pniGT0mW8YVsAmjHTkKdKmqEtwV1_bZLUeA8ySNwkzC_ndJ__nXk9JVVufiVrGmsCN7hQeRn_0B_9e14M5Q18xkFFidke55DGYh3pCDoS5EgLWAMaPf9EaZ6XCnDYAt3ZAjtNbq9qBTC2biTVTvd1KA=w1280' },
      { id: 'production', label: 'Production d’écrit', icon: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSsSCXsXmEEKfMK0Zgwxk5Yntpy599gZy3stigcDSQIWYJa40M3tZ0LXfoa0zI-UN4FYzhSDogvmAImCiDgVVfjb0LpPXXWjUJtgjZUuFK4LD6_CMH_xMVsIixs05zhZQoNxY5_5ZmOqTlQzfjoHj0pdwBLGrfqvdOVJXTS6FTOxyfHEEfB5a411jGIiT5IKxCzBDTaMg-a7ANZu_tAK5T_NIY_LVngxFoV4sY=w1280' },
    ]
  },
  maths: {
    label: 'Maths',
    color: 'bg-red-600',
    icon: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRLTHEGUuFaMzdVOewJC3Ws_KL8jCeZRklUPoYluQ0U4EaWwemzVPih3ezyuzCf5oQollt8Hcmi97y-uGTw_DfhA5RRI_WxHEb1AOxtrXyweR3McWjl3m36e9dfBoYo3XvGWODdKUv0RF9SQFLRle5ZEAaNzG89VbCMG2g8CbTWjv4UgQBVZ1EOtC7DergDSs8c_FNUo6EUwNCpjuNze2YnOx2GR7_T_0hB05E=w1280',
    subSubjects: [
      { id: 'numeration', label: 'Numération', icon: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSgoq2cptTDzBgcB6-lh8B32vDAsOs7Drb9lkaEZmrCnafAAvOacikGxU7mat4mN7d0FHmZ84g06lMRQuvRT4DlxXUDqWFtEw2SqDAXFbqUzrVYwayVIqdYs9BoPWw16EmVHLTmSQnYpJ9uFd2k_z3dSZb-_aO4mB0bSYX-Kc2X567tnRB3Sv_Los1gjOMpxwfx5gSw3QxAdfFh8GV2Gstz-FQ3enWQqZyJb74=w1280' },
      { id: 'calcul', label: 'Calcul', icon: 'https://lh3.googleusercontent.com/sitesv/APaQ0SR8oyZARMBSrEDp9EY8n3hIx1grJpYoxQv-kHbfyrMOgwC3LgfRqJtLqt8FsJh5LQu2pNLljRPnitNnsVNvkGpGBC1pd0AAZW_YNe3eQilU-mCrfAAoOyGduSeT2DVfNPtzz1TNUKwTdtamI1u_s5exY6YwJywz09hn_Yj_VcfpQwqskImFVxu3Yfc8ByfkGMls-25PatjDADA0g76wdRp8c05JfXBWviiJuNA=w1280' },
      { id: 'mesure', label: 'Grandeurs et mesure', icon: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRp1fDBTYbCwtn_c31snVYo5TxDytQzfhsNjUFkbTBqqekwbdSNPyasnBU7lPtzUabMHauPYtafQAnEZ3XZc5ZHKYOMe5bhPwBie1qoY7CuOePQqR7d5IsMhk08JDJjFyM9kB8wM_ar1ioW0_7a-TfU4HgTnw1KHTsrEcTbVv6m3tr3b-lGv8-IMbn9fjRaXWBNCC6zp8cfZHBNa5LJmzX8cXzlHCdawnWHkVg=w1280' },
      { id: 'geometrie', label: 'Géométrie', icon: 'https://lh3.googleusercontent.com/sitesv/APaQ0SStDCqq-mim7YhyRBbahUlU1hjdygosvoMo1LFYXSUKPTjkstrPjz6VBc1mXB3_F2boktzrqRSJAlZgNZEMUmKVdOoicT3c0vK4_n0AJrrxyBYT9Jq76cPuzs0H-9Cpd5p6C44sSiE777wysurL2EZB6uZ3GPABUq5LrtiXiRPJssgXACI3Ocj86ef9iZMyvU9cdPTTdEPDfgHNJR0q4TA00DDz8qD1xKyL1jM=w1280' },
    ]
  }
};

export const POSITIVE_FEEDBACKS = [
  "Incroyable !",
  "Génial !",
  "Bravo, champion !",
  "Tu es un as !",
  "Excellent travail !",
  "Fantastique !",
  "Quelle réussite !"
];
