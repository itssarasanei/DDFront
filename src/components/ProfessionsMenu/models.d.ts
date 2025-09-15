import { PopoverVirtualElement } from '@mui/material';

import { Professional } from '@/api/methods/models';

export interface ProfessionsMenuProps {
  anchorElement?:
    | Element
    | (() => Element)
    | PopoverVirtualElement
    | (() => PopoverVirtualElement)
    | null;
  isOpen: boolean;
  onClose: () => void;
  professions: Professional[];
}
