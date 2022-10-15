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
server.getRoutes();

// Класс Server принимает экземпляр класса Router
// Т.е. экземпляр router инициализируется вне Server
// и может существовать отдельно от него.
