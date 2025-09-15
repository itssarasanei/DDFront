import { Professional } from '@/api/methods/models';

export interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  professions: Professional[];
}
