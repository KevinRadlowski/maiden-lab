export interface NavItem {
  label: string;
  path: string;
  exact: boolean;
}

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', path: '/', exact: true },
  { label: 'Projets', path: '/projets', exact: false },
  { label: 'Parcours', path: '/parcours', exact: true },
  { label: 'Lab', path: '/lab', exact: true },
  { label: 'À propos', path: '/a-propos', exact: true },
  { label: 'Contact', path: '/contact', exact: true },
];
