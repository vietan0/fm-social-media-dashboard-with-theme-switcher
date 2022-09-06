import { string } from 'prop-types';

export default function SmallSocialCard({
  statName, socialMedia, number, diff, diffType,
}) {
  return (
    <div className="card small">
      <div className="stat-name">
        <p>{statName}</p>
        <i className={`bi bi-${socialMedia}`} />
      </div>
      <div className="stat">
        <span className="number">{number}</span>
        <div className={`diff ${diffType}`}>
          <i className={`bi bi-caret-${diffType}-fill`} />
          {diff}
        </div>
      </div>
    </div>
  );
}

SmallSocialCard.propTypes = {
  statName: string.isRequired,
  socialMedia: string.isRequired,
  number: string.isRequired,
  diff: string.isRequired,
  diffType: string.isRequired,
};
