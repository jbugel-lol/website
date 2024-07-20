<form
    action="https://api.web3forms.com/submit"
    method="POST"
    id="form"
    class="mx-auto flex flex-col items-center justify-center"
>
    <script>
        window.onload = function () {
            document.getElementById('form').reset();
        };
    </script>
    <fieldset class="w-full md:w lg:w-1/5 text-cat-text">
        <legend class="flex justify-between items-center">Contact Form</legend>
        <input type="hidden" name="access_key" value={import.meta.env.VITE_CONTACTAPI} />
        <input type="hidden" name="subject" value="Email-Contact Submission" />
        <input type="hidden" name="redirect" value="https://jbugel.pages.dev/contact/success" />
        <input type="checkbox" name="botcheck" class="hidden" style="display: none;" />
        <div class="flex flex-col items-center">
            <label for="name" class="text-center">You'r Name*</label><br />
            <input
                type="text"
                name="name"
                id="name"
                placeholder="J... B..."
                required
                class="my-2 w-full bg-cat-mantle rounded-3xl text-center focus:outline-none focus:outline-cat-lavender"
            /><br /><br />
        </div>
        <div class="flex flex-col items-center">
            <label for="email" class="text-center">Email Address*</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="mail@domain.tld"
                required
                class="my-2 w-full bg-cat-mantle rounded-3xl text-center focus:outline-none focus:outline-cat-lavender"
            /><br /><br />
        </div>
        <div class="flex flex-col items-center">
            <label for="message" class="text-center">Your Message*</label>
            <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Hello there..."
                required
                class="my-4 w-full bg-cat-mantle rounded-3xl text-center focus:outline-none focus:outline-cat-lavender"
                style="resize: vertical; overflow: hidden"
            ></textarea>
        </div>
        <div
            class="h-captcha"
            data-captcha="true"
            data-lang="en"
            data-theme="dark"
            data-onload="myFunction"
            data-render="explicit"
            data-size="compact"
        ></div>
        <button
            type="submit"
            class="mt-2 w-full bg-cat-mantle text-cat-text py-2 px-4 rounded-3xl hover:bg-cat-crust transform duration-500 ease-out focus:outline-none focus:outline-cat-lavender"
        >
            Send Message
        </button>
        <div class="text-right p-1">
            <p>* required fields</p>
        </div>
    </fieldset>
</form>
