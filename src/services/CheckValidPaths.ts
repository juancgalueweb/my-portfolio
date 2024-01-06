export function CheckValidPath(url: string): string {
  const validPaths: string[] = [
    '/technologies',
    '/diplomas',
    '/myprojects',
    '/myprojects/cocktailsdb-app',
    '/myprojects/library-app',
    '/myprojects/tic-tac-toe-app',
    '/myprojects/wine-app',
    '/myprojects/movies-app',
    '/myprojects/shopping-cart-app',
    '/myprojects/todos-app',
    '/myprojects/google-translate-clone-app',
    '/myprojects/harry-potter-quiz',
    '/myprojects/reading-list-app',
    '/myprojects/chat-app'
  ]
  if (validPaths.includes(url)) {
    return url
  } else {
    return '/'
  }
}
