import avatarPersonnel from './assets/avatar-personnel.svg'

export const tree = {
  id: 100,
  entity: {
    id: 100,
    avatar: avatarPersonnel,
    name: 'Henry Monger',
    title: 'IT Department',
    subTitle: 'CTO',
    totalReports: 3,
  },
  hasChild: true,
  hasParent: false,
  children: [
    {
      id: 36,
      entity: {
        id: 36,
        avatar: avatarPersonnel,
        name: 'Tomasz Polaski',
        title: 'IT Manager',
        totalReports: 4,
      },
      hasChild: true,
      hasParent: true,
      children: [
        {
          id: 56,
          entity: {
            id: 56,
            avatar: avatarPersonnel,
            name: 'Sam John',
            title: 'HR',
            totalReports: 2,
            link: 'https://github.com/smartprocure/react-org-chart',
          },
          hasChild: true,
          hasParent: true,
          children: [
            {
              id: 102,
              entity: {
                id: 102,
                avatar: avatarPersonnel,
                name: 'Hendy Kinger',
                title: 'Manager',
                totalReports: 0,
              },
              hasChild: true,
              hasParent: true,
              children: [],
            },
            {
              id: 455,
              entity: {
                id: 455,
                avatar: avatarPersonnel,
                name: 'Kate Baker',
                title: 'IT Officer',
                totalReports: 0,
              },
              hasChild: false,
              hasParent: true,
              children: [],
            }
          ],
        },
        {
          id: 66,
          entity: {
            id: 66,
            avatar: avatarPersonnel,
            name: 'John Doe',
            title: 'Developer',
            totalReports: 0,
            link: 'https://github.com/smartprocure/react-org-chart',
          },
          hasChild: true,
          hasParent: true,
          children: [],
        },
        {
          id: 76,
          entity: {
            id: 76,
            avatar: avatarPersonnel,
            name: 'Emilia Rogers',
            title: 'Developer',
            totalReports: 0,
            link: 'https://github.com/smartprocure/react-org-chart',
          },
          hasChild: true,
          hasParent: true,
          children: [],
        },
        {
          id: 60,
          entity: {
            id: 60,
            avatar: avatarPersonnel,
            name: 'Ellen Cott',
            title: 'IT Officer',
            totalReports: 0,
          },
          hasChild: false,
          hasParent: true,
          children: [],
        }
      ],
    },
    {
      id: 32,
      entity: {
        id: 32,
        avatar: avatarPersonnel,
        name: 'Emanuel Walker',
        title: 'IT Specialist',
        totalReports: 1,
      },
      hasChild: false,
      hasParent: true,
      children: [{
        id: 710,
        entity: {
          id: 710,
          avatar: avatarPersonnel,
          name: 'Kenneth Thoe',
          title: 'IT Champ',
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      }],
    },
    {
      id: 25,
      entity: {
        id: 25,
        avatar: avatarPersonnel,
        name: 'Kerry Peter',
        title: 'IT Specialist',
        totalReports: 2,
      },
      hasChild: true,
      hasParent: true,
      children: [
        {
          id: 70,
          entity: {
            id: 70,
            avatar: avatarPersonnel,
            name: 'Kenneth Dom',
            title: 'IT Officer',
            totalReports: 0,
          },
          hasChild: false,
          hasParent: true,
          children: [],
        },
        {
          id: 45,
          entity: {
            id: 45,
            avatar: avatarPersonnel,
            name: 'Kin Baker',
            title: 'IT Officer',
            totalReports: 0,
          },
          hasChild: false,
          hasParent: true,
          children: [],
        }
      ],
    }
  ],
}

export const otherTree = {
  id: 1,
  hasChild: true,
  isHighlight: false,
  children: [
    {
      id: 2,
      hasChild: false,
      isHighlight: false,
      children: [],
      entity: {
        id: 2,
        title: "Centrul de instruire",
        params: { slug: "centrul-de-instruire" },
        route: "articles/[slug]",
      },
    },
    {
      id: 3,
      hasChild: false,
      isHighlight: false,
      children: [],
      entity: {
        id: 3,
        title: "Secția coordonate instituționale",
        params: { slug: "sectia-coordonate-institutionale" },
        route: "articles/[slug]",
      },
    },
    {
      id: 4,
      hasChild: false,
      isHighlight: false,
      children: [],
      entity: {
        id: 4,
        title: "Secția relații publice",
        params: { slug: "sectia-relatii-publice" },
        route: "articles/[slug]",
      },
    },
    {
      id: 5,
      hasChild: false,
      isHighlight: false,
      children: [],
      entity: {
        id: 5,
        title: "Secția unitate de gardă",
        params: { slug: "sectia-unitate-de-garda" },
        route: "articles/[slug]",
      },
    },
    {
      id: 6,
      hasChild: true,
      isHighlight: false,
      children: [
        {
          id: 7,
          hasChild: false,
          isHighlight: false,
          children: [],
          entity: {
            id: 7,
            title: "Centrul chinologic",
            params: { slug: "centru-chinologic" },
            route: "articles/[slug]",
          },
        },
        {
          id: 8,
          hasChild: false,
          isHighlight: false,
          children: [],
          entity: {
            id: 8,
            title: "Direcția investigare fraude vamale",
            params: { slug: "directia-investigare-fraude-vamale" },
            route: "articles/[slug]",
          },
        },
        {
          id: 9,
          hasChild: false,
          isHighlight: false,
          children: [],
          entity: {
            id: 9,
            title: "Direcția urmarire penală",
            params: { slug: "directia-urmarire-penala" },
            route: "articles/[slug]",
          },
        },
        {
          id: 10,
          hasChild: false,
          isHighlight: false,
          children: [],
          entity: {
            id: 10,
            title: "Direcția control ulterior",
            params: { slug: "directia-control-ulterior" },
            route: "articles/[slug]",
          },
        },
        {
          id: 11,
          hasChild: false,
          isHighlight: false,
          children: [],
          entity: {
            id: 11,
            title: "Direcția analiza riscurilor",
            params: { slug: "directia-analiza-riscurilor" },
            route: "articles/[slug]",
          },
        },
      ],
      entity: {
        id: 6,
        title:
          "Director general adjunct șef departamentul conformare și antifraudă",
        params: {
          slug:
            "director-general-adjunct-sef-departamentul-conformare-si-antifrauda",
        },
        route: "articles/[slug]",
        totalReports: 5,
      },
    },
    {
      id: 12,
      hasChild: false,
      isHighlight: false,
      children: [],
      entity: {
        id: 12,
        title: "Direcția control juridic executare silită",
        params: { slug: "directia-control-juridic-executare-silita" },
        route: "articles/[slug]",
      },
    },
    {
      id: 13,
      hasChild: false,
      isHighlight: false,
      children: [],
      entity: {
        id: 13,
        title: "Direcția management strategic și cooperare vamală",
        params: { slug: "directia-management-strategic-si-cooperare-vamala" },
        route: "articles/[slug]",
      },
    },
    {
      id: 14,
      hasChild: false,
      isHighlight: false,
      children: [],
      entity: {
        id: 14,
        title: "Direcția finanțe evidență contabilă",
        params: { slug: "directia-finante-evidenta-contabila" },
        route: "articles/[slug]",
      },
    },
    {
      id: 15,
      hasChild: false,
      isHighlight: false,
      children: [],
      entity: {
        id: 15,
        title: "Direcția management personal",
        params: { slug: "directia-management-personal" },
        route: "articles/[slug]",
      },
    },
    {
      id: 16,
      hasChild: false,
      isHighlight: false,
      children: [],
      entity: {
        id: 16,
        title: "Direcția dezvoltare și securitate informațională",
        params: { slug: "directia-dezvoltare-si-securitate-informationala" },
        route: "articles/[slug]",
      },
    },
    {
      id: 17,
      hasChild: false,
      isHighlight: false,
      children: [],
      entity: {
        id: 17,
        title: "Direcția integritate și supraveghere",
        params: { slug: "directia-integritate-si-supraveghere" },
        route: "articles/[slug]",
      },
    },
    {
      id: 18,
      hasChild: false,
      isHighlight: false,
      children: [],
      entity: {
        id: 18,
        title: "Direcția audit intern",
        params: { slug: "directia-audit-intern" },
        route: "articles/[slug]",
      },
    },
    {
      id: 19,
      hasChild: false,
      isHighlight: false,
      children: [],
      entity: {
        id: 19,
        title: "Direcția suport managerial",
        params: { slug: "directia-suport-managerial" },
        route: "articles/[slug]",
      },
    },
    {
      id: 20,
      hasChild: true,
      isHighlight: false,
      children: [
        {
          id: 21,
          hasChild: false,
          isHighlight: false,
          children: [],
          entity: {
            id: 21,
            title: "Laborator vamal",
            params: { slug: "laborator-vamal" },
            route: "articles/[slug]",
          },
        },
        {
          id: 22,
          hasChild: false,
          isHighlight: false,
          children: [],
          entity: {
            id: 22,
            title:
              "Direcția organizarea controlului vamal și facilitatre comerțului",
            params: {
              slug:
                "directia-organizarea-controlului-vamal-si-facilitare-comertului",
            },
            route: "articles/[slug]",
          },
        },
        {
          id: 23,
          hasChild: false,
          isHighlight: false,
          children: [],
          entity: {
            id: 23,
            title:
              "Direcția valoare în vamă clasificarea și originea mărfurilor",
            params: {
              slug: "directia-valoare-vama-clasificarea-si-originea-marfurilor",
            },
            route: "articles/[slug]",
          },
        },
        {
          id: 24,
          hasChild: false,
          isHighlight: false,
          children: [],
          entity: {
            id: 24,
            title: "Direcția venitrui vamale",
            params: { slug: "directia-venituri-vamale" },
            route: "articles/[slug]",
          },
        },
      ],
      entity: {
        id: 20,
        title:
          "Director general adjunct sef departament venituri și proceduri vamale",
        params: {
          slug:
            "director-general-adjunct-sef-departament-venituri-si-proceduri-vamale",
        },
        route: "articles/[slug]",
        totalReports: 4,
      },
    },
    {
      id: 25,
      hasChild: true,
      isHighlight: false,
      children: [
        {
          id: 26,
          hasChild: false,
          isHighlight: false,
          children: [],
          entity: {
            id: 26,
            title: "Biroul Vamal Sud",
            params: { slug: "biroul-vamal-sud" },
            route: "articles/[slug]",
          },
        },
        {
          id: 27,
          hasChild: false,
          isHighlight: false,
          children: [],
          entity: {
            id: 27,
            title: "Biroul Vamal Centru",
            params: { slug: "biroul-vamal-centru" },
            route: "articles/[slug]",
          },
        },
        {
          id: 28,
          hasChild: false,
          isHighlight: false,
          children: [],
          entity: {
            id: 28,
            title: "Biroul Vamal Nord",
            params: { slug: "biroul-vamal-nord" },
            route: "articles/[slug]",
          },
        },
      ],
      entity: {
        id: 25,
        title: "Birouri Vamale",
        params: { tab: "customs" },
        route: "info/[tab]",
        totalReports: 3,
      },
    },
  ],
  entity: {
    id: 1,
    title: "Director general",
    params: { slug: "director-general" },
    route: "articles/[slug]",
  },
};
