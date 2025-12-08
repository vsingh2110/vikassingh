import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span>
          Created By{' '}
          <Link
            href="https://github.com/vsingh2110/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-crimson hover:underline"
          >
            Vikas Singh
          </Link>{' '}
          | <i className="far fa-copyright"></i> 2022-{new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  )
}
