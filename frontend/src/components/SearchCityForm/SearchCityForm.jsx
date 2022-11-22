
import style from './SearchCityForm.module.scss';
export default function SearchCityForm({ onSubmit, onChange }) {
  
  

  return (
    
      <form action="" onSubmit={onSubmit} className={style.form}>
        <input
          type="text"
          onChange={onChange}
          className={style.input}
          placeholder="Search..."
        />
        <button type="submit">sub</button>
      </form>
    
  );
}
