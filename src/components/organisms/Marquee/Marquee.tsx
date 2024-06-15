import AppImage from '~atoms/AppImage/AppImage';
import Amazon from '~assets/images/marquee/amazon.svg';
import Dribble from '~assets/images/marquee/dribble.svg';
import Hubspot from '~assets/images/marquee/hubspot.svg';
import Netflix from '~assets/images/marquee/netflix.svg';
import Notion from '~assets/images/marquee/notion.svg';
import Zoom from '~assets/images/marquee/zoom.svg';

import clsx from 'clsx';
import s from './Marquee.module.scss';

const Marquee = () => {
  return (
    <div className={s.container}>
      <div className={clsx(s.box, s.box1)}>
        <AppImage src={Amazon} alt='Amazon' />
      </div>
      <div className={clsx(s.box, s.box2)}>
        <AppImage src={Dribble} alt='Dribble' />
      </div>
      <div className={clsx(s.box, s.box3)}>
        <AppImage src={Hubspot} alt='Hubspot' />
      </div>
      <div className={clsx(s.box, s.box4)}>
        <AppImage src={Netflix} alt='Netflix' />
      </div>
      <div className={clsx(s.box, s.box5)}>
        <AppImage src={Notion} alt='Notion' />
      </div>
      <div className={clsx(s.box, s.box6)}>
        <AppImage src={Zoom} alt='Zoom' />
      </div>
    </div>
  );
};

export default Marquee;
