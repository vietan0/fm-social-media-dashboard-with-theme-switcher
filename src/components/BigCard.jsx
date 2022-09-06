import { string } from 'prop-types';

export default function BigSocialCard({
  socialMedia, username, number, unit, diff, diffType,
}) {
  return (
    <div className={`card big ${socialMedia}`}>
      <div className="social-media">
        <i className={`bi bi-${socialMedia}`} />
        {username}
      </div>
      <div className="main-stat">
        <span className="number">{number}</span>
        <span className="unit">{unit}</span>
      </div>
      <div className={`diff ${diffType}`}>
        <i className={`bi bi-caret-${diffType}-fill`} />
        {diff}
        {' '}
        Today
      </div>
    </div>
  );
}

BigSocialCard.propTypes = {
  socialMedia: string.isRequired, // facebook/instagram/twitter/youtube
  username: string.isRequired,
  number: string.isRequired,
  unit: string.isRequired, // followers/subscribers
  diff: string.isRequired,
  diffType: string.isRequired, // up/down
};
