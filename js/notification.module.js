// Notification function with type (success, error, etc.)
export const showNotification = (message, type = 'success') => {
  const notification = document.createElement('div');
  notification.className = `alert alert-${type} position-fixed top-0 end-0 m-3 z-3`;
  notification.innerText = message;
  notification.role = 'alert'

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000); // Auto-remove after 3 seconds
};