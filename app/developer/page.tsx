import Sidebar from '@/components/dashboard/Sidebar';
import PaymentForm from '@/components/FakePaymentGateway';
import Header from '@/components/Header';
import React from 'react';

const Page = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <Header/>
      <Sidebar/>
      <div className="flex flex-grow mt-10">
        <main className="w-full p-8 bg-gray-800 bg-opacity-45 shadow-lg rounded-lg">
          <article className="prose lg:prose-xl font-sans text-gray-200">
            <h1 className="text-4xl font-bold text-white mb-6">
              Integration Guide for Web Developers
            </h1>
            <p>
              Welcome to the integration guide. Here, you'll find step-by-step instructions to help you get started. Whether you're working with APIs, databases, or third-party services, this guide has got you covered.
            </p>
            <h2 className="text-3xl font-semibold text-white mt-8 mb-4">
              Fake Payment Gateway for Developers
            </h2>
            <p>
              I have created a fake payment gateway that developers can easily integrate into their websites for testing purposes. This gateway provides a safe environment to simulate payment processing, helping you ensure that your integration is smooth and error-free before going live.
            </p>
            <h3 className="text-2xl font-semibold text-white mt-6 mb-4">
              Integration Code
            </h3>
            <p>
              Below is the integration code snippet. Simply copy and paste this code into your project to get started.
            </p>
            <div className="bg-gray-900 p-4 rounded-lg my-6">
              <code className="block whitespace-pre-wrap text-sm text-gray-200">
                <PaymentForm/>
              </code>
            </div>
            <p>
              Make sure to customize the code according to your project’s requirements.
            </p>
          </article>
        </main>
      </div>
    </section>
  )
}

export default Page;
