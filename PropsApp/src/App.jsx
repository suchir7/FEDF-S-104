function Student(props)
{
  return <h2>Hello, [props.name]!</h2>
}

function App()
{
  return (
    <div>
      <Student name="Suchir"/>
      <Student name="Ram"/>
    </div>
  );
}

function Student(props)
{
  return <h2>Hello, [props.anme]!</h2>;

}

export default App;