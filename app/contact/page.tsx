import { Metadata } from 'next';
import MainHeading from '../components/MainHeading';
import Link from 'next/link'
import SubHeading from '../components/SubHeading';

export const metadata: Metadata = {
  title: 'Contact'
};

export default function Page() {
  return (
    <>
      <SubHeading>For Inquiry of Tree Removal Services</SubHeading>

      <p className="mb-2 text-2xl font-extrabold text-red-300">
      Please feel free to reach me at <a className="underline decoration-red-500/50">[Your Contact Information]</a>or reply to the email below the email. Thank you for your time and assistance. We look forward to the opportunity to work together. </p>

      <h2>For the email address that I can be reached at:
<br/>
<br/>
<span className="tracking-wide italic md :not-italic text-4xl underline underline-offset-"><a href="mailto:pro.amarjitsingh@gmail.com" target="_blank">contact@amartreeremoval.com</a> </span></h2>
    </>
  );
}
