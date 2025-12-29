const aboutBtn = document.getElementById("aboutBtn")
const contactBtn = document.getElementById("contactBtn")
const heroContactBtn = document.getElementById("heroContactBtn")

const menuBtn = document.getElementById("menuBtn")
const mobileNav = document.getElementById("mobileNav")

const contactForm = document.getElementById("contactForm")
const formNote = document.getElementById("formNote")

const yearEl = document.getElementById("year")
if (yearEl) yearEl.textContent = new Date().getFullYear()

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

aboutBtn.addEventListener("click", () => scrollToSection("about"))
contactBtn.addEventListener("click", () => scrollToSection("contact"))
heroContactBtn.addEventListener("click", () => scrollToSection("contact"))

menuBtn.addEventListener("click", () => {
  const isOpen = mobileNav.style.display === "block"
  mobileNav.style.display = isOpen ? "none" : "block"
})

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.style.display = "none"
  })
})

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const message = document.getElementById("message").value.trim()

  if (!name || !email || !message) {
    formNote.textContent = "Please fill in name email and message."
    return
  }

  const subject = encodeURIComponent(`Portfolio message from ${name}`)
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)

  window.location.href = `mailto:me@maryanfawzy.com?subject=${subject}&body=${body}`

  formNote.textContent = "Your email draft is ready. Please press send in your email app."
  contactForm.reset()

  setTimeout(() => {
    formNote.textContent = ""
  }, 9000)
})
