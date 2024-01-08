import { useForm } from 'react-hook-form';

function FormEx() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onValid = (data) => {
    console.log(`onValid`, data);
  };

  const onInValid = (err) => {
    console.log(`onInValid`, err);
  };
  return (
    <>
      <h1>react hook form 실습</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="name"
          {...register('name', {
            required: '이름은 필수 항목입니다.',
          })}
        />
        {errors.name?.message}
        <br />
        <input
          type="text"
          placeholder="age"
          {...register('age', {
            required: '나이를 입력해주세요',
            validate: {
              validAge: (value) => {
                return (
                  (value >= 0 && typeof value != Number) ||
                  '0 이상의 숫자만 입력 가능합니다.'
                );
              },
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}

export default FormEx;
