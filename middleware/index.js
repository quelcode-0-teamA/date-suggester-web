export default function({ app, redirect, route }) {
  const dateToken = app.$cookie.get('datetoken')
  if (!dateToken) {
    return redirect('/')
  }
}
