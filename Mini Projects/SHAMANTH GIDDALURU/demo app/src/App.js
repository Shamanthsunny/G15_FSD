
import './App.css';
import Alert from './components/alert';
import Greeting from './components/greetings';
import Car from './components/car';
import Goal from './components/goal ';
import EmployeeList from './components/Employee List';
import Customer from './components/Customer';


function App() {
  const customerData = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    transactions: [
      { id: 1, date: '2023-08-23', amt: 100 },
      { id: 2, date: '2023-08-24', amt: 150 },
      { id: 3, date: '2023-08-25', amt: 200 }
    ]
  };

  return (
    <div className="App">
      <Customer
        id={customerData.id}
        firstName={customerData.firstName}
        lastName={customerData.lastName}
        transactions={customerData.transactions}
      />

      <EmployeeList/>
    </div>
  );
}

export default App;
