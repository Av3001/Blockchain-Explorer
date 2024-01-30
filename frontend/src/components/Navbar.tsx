import { useState, useEffect } from 'react';
import { IoIosNotifications, } from 'react-icons/io';
import { CiCircleAlert } from "react-icons/ci";

interface Alert {
  id: number;
  message: string;
  createdAt: string;
  notificationMethods: string[]; // Add an array of notification methods
}

const Test = () => {
  const [showAddAlert, setShowAddAlert] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [newAlert, setNewAlert] = useState<string>('');
  const [hasNotifications, sethasNotifications] = useState(false);
  const [selectedNotificationMethods, setSelectedNotificationMethods] = useState<string[]>([]);

  useEffect(() => {
    // Fetch alerts from local storage on component mount
    const storedAlerts = localStorage.getItem('alerts');
    if (storedAlerts) {
      setAlerts(JSON.parse(storedAlerts));
    }
  }, []);

  const toggleAddAlert = () => {
    setShowAddAlert(!showAddAlert);
  };
  const togglehasNotifications = () => {
    sethasNotifications(!hasNotifications);
  };

  const handleAddAlert = () => {
    if (newAlert.trim() !== '') {
      const newAlertObject: Alert = {
        id: alerts.length + 1,
        message: newAlert,
        createdAt: new Date().toLocaleString(),
        notificationMethods: selectedNotificationMethods,
      };
      setAlerts([...alerts, newAlertObject]);
      setNewAlert('');
      setSelectedNotificationMethods([]);

      // Save updated alerts to local storage
      localStorage.setItem('alerts', JSON.stringify([...alerts, newAlertObject]));
    }
    setShowAddAlert(false);
  };

  const clearAlerts = () => {
    // Clear alerts from state and local storage
    setAlerts([]);
    localStorage.removeItem('alerts');
  };

  const handleNotificationMethodToggle = (method: string) => {
    setSelectedNotificationMethods((prevMethods) => {
      if (prevMethods.includes(method)) {
        return prevMethods.filter((m) => m !== method);
      } else {
        return [...prevMethods, method];
      }
    });
  };

  return (
    <nav className="bg-blue-500 p-4 ">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="text-white text-xl font-bold">Blockchain Explorer</div>
        <div className=" text-white cursor-pointer font-bold text-base " onClick={(togglehasNotifications)}>
      <IoIosNotifications color="yellow" className="h-11 w-11 focus:outline-none right-28 "  />
      Notifications
        {hasNotifications && (
          <div className="absolute  bg-slate-400 text-white px-2 py-1 rounded-md">
            No notifications received
          </div>
        )}
      </div>
          
        <div className="relative">
          <div onClick={toggleAddAlert} className="cursor-pointer text-white font-bold text-base">
            <CiCircleAlert color="yellow" className="h-11 w-11 focus:outline-none" />
            Your Alert
          </div>
          {showAddAlert && (
            <div className="absolute right-0 mt-2 w-64 bg-slate-400 rounded shadow-lg overflow-hidden z-10">
              <div className="p-2 border-b">
                <input
                  type="text"
                  placeholder="Enter Alert Message"
                  value={newAlert}
                  onChange={(e) => setNewAlert(e.target.value)}
                  className="border p-2 w-full"
                />
                <div className="mt-2">
                  <span className="mr-4">Notification Methods:</span>
                  <label className="mr-4">
                    <input
                      type="checkbox"
                      value="Email"
                      checked={selectedNotificationMethods.includes('Email')}
                      onChange={() => handleNotificationMethodToggle('Email')}
                    />
                    Email
                  </label>
                  <label className="mr-4">
                    <input
                      type="checkbox"
                      value="SMS"
                      checked={selectedNotificationMethods.includes('SMS')}
                      onChange={() => handleNotificationMethodToggle('SMS')}
                    />
                    SMS
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Push Notification"
                      checked={selectedNotificationMethods.includes('Push Notification')}
                      onChange={() => handleNotificationMethodToggle('Push Notification')}
                    />
                    Push Notification
                  </label>
                </div>
                <button onClick={handleAddAlert} className="bg-blue-500 text-white p-2 mt-2">
                  Add Alert
                </button>
              </div>
              <div className="max-h-48 overflow-y-auto">
                {alerts.map((alert) => (
                  <div key={alert.id} className="p-2 border-b">
                    <div>{alert.message}</div>
                    <small className="text-gray-950">{alert.createdAt}</small>
                  </div>
                ))}
              </div>
              <div className="p-2">
                <button onClick={clearAlerts} className="bg-red-500 text-white p-2">
                  Clear Alerts
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Test;