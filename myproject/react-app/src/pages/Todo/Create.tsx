import { useForm } from '@inertiajs/react';
import * as React from 'react';

const Create = ({ test }): React.ReactNode => {
  console.log('testsssss', test);

  const { data, setData, post, processing, errors } = useForm({
    title: 'sds',
    description: 'asdasd',
  });

  function submit(e) {
    e.preventDefault();
    post('/todos/create');
  }

  return (
    <div>
      <h1>Create new todo</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={(e) => setData('title', e.target.value)}
        />
        {errors.title && <div>{errors.title}</div>}
        <br />
        <br />
        <textarea
          name="description"
          value={data.description}
          onChange={(e) => setData('description', e.target.value)}
        />
        {errors.description && <div>{errors.description}</div>}
        <br />
        <br />
        <button type="submit" disabled={processing}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
