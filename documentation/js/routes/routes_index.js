var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./tasks/tasks.module#TasksModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tasks/tasks-routing.module.ts","module":"TasksRoutingModule","children":[{"path":"","component":"PageListTasksComponent"},{"path":"add-task","component":"PageAddTaskComponent"},{"path":"edit-task/:id","component":"PageEditTaskComponent"}],"kind":"module"}],"module":"TasksModule"}]},{"path":"**","loadChildren":"./page-not-found/page-not-found.module#PageNotFoundModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/page-not-found/page-not-found-routing.module.ts","module":"PageNotFoundRoutingModule","children":[{"path":"","component":"PageNotFoundComponent"}],"kind":"module"}],"module":"PageNotFoundModule"}]}],"kind":"module"}]}
