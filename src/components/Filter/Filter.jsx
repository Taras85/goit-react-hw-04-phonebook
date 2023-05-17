import PropTypes from 'prop-types';
import s from './Filter.module.css';

export function Filter({ value, onChangeFilter }) {
  return (
    <div className={s.filterContainer}>
      <h3 >Find contacts by name</h3>
      <input
        
        placeholder="Input name..."
        type="onSubmit"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};