class Router {
  getRoutes() {
    console.log('show all routes')
  }
}

class Server {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  getRoutes() {
    this.router.getRoutes();
  }

}

const router = new Router();
const server = new Server(router);
// или
const anotherServer = new Server(new Router());

server.getRoutes();
anotherServer.getRoutes();

// Класс Server принимает экземпляр класса Router
// Класс Router не инициализируется в конструкторе Server
// а передаётся экземпляром внутрь конструктора при его инициализации.
// Т.е. существует отдельно от него.
