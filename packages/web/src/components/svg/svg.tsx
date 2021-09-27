import './svg.scss';

export const HamburgerIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="hamburger-svg-attr" fill="white">
      <path d="M 21 6 H 3 V 5 h 18 V 6 Z M 21 11 H 3 v 1 h 18 V 11 Z M 21 17 H 3 v 1 h 18 V 17 Z"></path>
    </svg>
  );
};

export const UnderHamburgerIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="hamburger-svg-attr" fill="#286cfd">
      <path d="M 21 6 H 3 V 5 h 18 V 6 Z M 21 11 H 3 v 1 h 18 V 11 Z M 21 17 H 3 v 1 h 18 V 17 Z"></path>
    </svg>
  );
};

export const BellIcon = () => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="bell-svg-attr" fill="white">
      <path d="M16,29a4,4,0,0,1-4-4,1,1,0,0,1,1-1h6a1,1,0,0,1,1,1A4,4,0,0,1,16,29Zm-1.73-3a2,2,0,0,0,3.46,0Z M18,7H14a1,1,0,0,1-1-1,3,3,0,0,1,6,0A1,1,0,0,1,18,7ZM16,5h0Z M27,26H5a1,1,0,0,1-1-1,7,7,0,0,1,3-5.75V14a9,9,0,0,1,8.94-9h.11a9,9,0,0,1,9,9v5.25A7,7,0,0,1,28,25h0A1,1,0,0,1,27,26ZM6.1,24H25.9a5,5,0,0,0-2.4-3.33,1,1,0,0,1-.5-.87V14A7,7,0,1,0,9,14v5.8a1,1,0,0,1-.5.87A5,5,0,0,0,6.1,24Z" />
    </svg>
  );
};

export const UnderBellIcon = () => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="bell-svg-attr" fill="#286cfd">
      <path d="M16,29a4,4,0,0,1-4-4,1,1,0,0,1,1-1h6a1,1,0,0,1,1,1A4,4,0,0,1,16,29Zm-1.73-3a2,2,0,0,0,3.46,0Z M18,7H14a1,1,0,0,1-1-1,3,3,0,0,1,6,0A1,1,0,0,1,18,7ZM16,5h0Z M27,26H5a1,1,0,0,1-1-1,7,7,0,0,1,3-5.75V14a9,9,0,0,1,8.94-9h.11a9,9,0,0,1,9,9v5.25A7,7,0,0,1,28,25h0A1,1,0,0,1,27,26ZM6.1,24H25.9a5,5,0,0,0-2.4-3.33,1,1,0,0,1-.5-.87V14A7,7,0,1,0,9,14v5.8a1,1,0,0,1-.5.87A5,5,0,0,0,6.1,24Z" />
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="close-icon-attr"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};

export const TrashBag = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="trash-icon-attr">
      <g>
        <path d="M 28 40 H 11.8 c -3.3 0 -5.9 -2.7 -5.9 -5.9 V 16 c 0 -0.6 0.4 -1 1 -1 s 1 0.4 1 1 v 18.1 c 0 2.2 1.8 3.9 3.9 3.9 H 28 c 2.2 0 3.9 -1.8 3.9 -3.9 V 16 c 0 -0.6 0.4 -1 1 -1 s 1 0.4 1 1 v 18.1 C 33.9 37.3 31.2 40 28 40 Z"></path>
      </g>
      <g>
        <path d="M 28 40 H 11.8 c -3.3 0 -5.9 -2.7 -5.9 -5.9 V 16 c 0 -0.6 0.4 -1 1 -1 s 1 0.4 1 1 v 18.1 c 0 2.2 1.8 3.9 3.9 3.9 H 28 c 2.2 0 3.9 -1.8 3.9 -3.9 V 16 c 0 -0.6 0.4 -1 1 -1 s 1 0.4 1 1 v 18.1 C 33.9 37.3 31.2 40 28 40 Z"></path>
      </g>
      <g>
        <path d="M 33.3 4.9 h -7.6 C 25.2 2.1 22.8 0 19.9 0 s -5.3 2.1 -5.8 4.9 H 6.5 c -2.3 0 -4.1 1.8 -4.1 4.1 S 4.2 13 6.5 13 h 26.9 c 2.3 0 4.1 -1.8 4.1 -4.1 S 35.6 4.9 33.3 4.9 Z M 19.9 2 c 1.8 0 3.3 1.2 3.7 2.9 h -7.5 C 16.6 3.2 18.1 2 19.9 2 Z M 33.3 11 H 6.5 c -1.1 0 -2.1 -0.9 -2.1 -2.1 c 0 -1.1 0.9 -2.1 2.1 -2.1 h 26.9 c 1.1 0 2.1 0.9 2.1 2.1 C 35.4 10.1 34.5 11 33.3 11 Z"></path>
      </g>
      <g>
        <path d="M 12.9 35.1 c -0.6 0 -1 -0.4 -1 -1 V 17.4 c 0 -0.6 0.4 -1 1 -1 s 1 0.4 1 1 v 16.7 C 13.9 34.6 13.4 35.1 12.9 35.1 Z"></path>
      </g>
      <g>
        <path d="M 26.9 35.1 c -0.6 0 -1 -0.4 -1 -1 V 17.4 c 0 -0.6 0.4 -1 1 -1 s 1 0.4 1 1 v 16.7 C 27.9 34.6 27.4 35.1 26.9 35.1 Z"></path>
      </g>
      <g>
        <path d="M 19.9 35.1 c -0.6 0 -1 -0.4 -1 -1 V 17.4 c 0 -0.6 0.4 -1 1 -1 s 1 0.4 1 1 v 16.7 C 20.9 34.6 20.4 35.1 19.9 35.1 Z"></path>
      </g>
    </svg>
  );
};
