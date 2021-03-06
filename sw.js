console.log('sw.js');

self.onfetch = function(event) {
  console.log('self.onfetch', event);
}

self.onpush = function(event) {

  console.log('Received a push message', event);

  var title = 'Yay a message.';  
  var body = 'We have received a push message.';  
  var icon = '/images/icon-192x192.png';  
  var tag = 'simple-push-demo-notification-tag';

  event.waitUntil(  
    self.registration.showNotification(title, {  
      body: body,  
      icon: icon,  
      tag: tag  
    })  
  );  
}

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/');
  );
})