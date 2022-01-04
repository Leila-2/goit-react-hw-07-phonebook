import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts/Contacts";
import { useState } from "react";
import { useFetchContactsQuery } from "./redux/slice";

function App() {
  const [filter, setFilter] = useState("");

  const { data, isFetching } = useFetchContactsQuery();

  const getVisibleContacts = (contacts) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className="App">
      {/* <Form /> */}
      <Filter onChange={(e) => setFilter(e.target.value)} />
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <Contacts data={getVisibleContacts(data)} />
      )}
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: ({ name, number }) => dispatch(addContact({ name, number })),
// });

// export default connect(null, mapDispatchToProps)(App);

export default App;
