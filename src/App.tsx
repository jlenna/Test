import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
  } = useForm();
//  const [data, setData] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <label>Форма отправки сообщений</label>
      <p><input {...register('firstName')} placeholder="Имя"/>
      <input {...register('secondName')} placeholder="Фамилия"/>
      </p>
      <p>
      <input {...register('phone')} placeholder="Телефон" type="tel" pattern="+7-([0-9]{3})-[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
      <input {...register('email')} placeholder="E-mail"/>
      </p>
      <p>
      <textarea {...register('message')} placeholder="Сообщение" />
      </p>
{/* Тут надо сделать что-то приличное */}
      <p><button onClick= {(y) => console.log('Done')}> Отправить</button></p> 
    </form>
  );
}

export default App;
function setData(arg0: string): any {
  throw new Error('Function not implemented.');
}