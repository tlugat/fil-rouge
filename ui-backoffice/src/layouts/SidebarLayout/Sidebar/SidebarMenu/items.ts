import { ReactNode } from 'react';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  
  {
    heading: 'Dashboards',
    items: [
      {
        name: 'Statistiques',
        link: '/dashboards/stats',
        icon: BrightnessLowTwoToneIcon
      },
      // {
      //   name: 'Messenger',
      //   icon: MmsTwoToneIcon,
      //   link: '/dashboards/messenger'
      // },
    ]
  },
  // {
  //   heading: 'Management',
  //   items: [
  //     {
  //       name: 'Transactions',
  //       icon: TableChartTwoToneIcon,
  //       link: '/management/transactions'
  //     },
  //     {
  //       name: 'User Profile',
  //       icon: AccountCircleTwoToneIcon,
  //       link: '/management/profile',
  //       items: [
  //         {
  //           name: 'Profile Details',
  //           link: '/management/profile/details'
  //         },
  //         {
  //           name: 'User Settings',
  //           link: '/management/profile/settings'
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    heading: 'Gestion',
    items: [
      {
        name: 'Terminaux',
        icon: BallotTwoToneIcon,
        link: '/gestion/terminals'
      },
      {
        name: 'Litiges',
        icon: BeachAccessTwoToneIcon,
        link: '/gestion/litigations'
      },
      {
        name: 'Partenaires',
        icon: EmojiEventsTwoToneIcon,
        link: '/gestion/partners'
      },
      {
        name: 'Missions',
        icon: FilterVintageTwoToneIcon,
        link: '/gestion/jobs'
      },
      {
        name: 'Utilisateurs',
        icon: HowToVoteTwoToneIcon,
        link: '/gestion/users',
        // 
        
      },
    ]
  },
  {
    heading: 'Réglages des applications',
    items: [
      {
        name: 'Apparence',
        icon: BallotTwoToneIcon,
        link: '/app-settings/appearance'
      },
      {
        name: 'Objets de litiges',
        icon: BallotTwoToneIcon,
        link: '/app-settings/litigation-objects'
      },
    ]
  },
];

export default menuItems;
