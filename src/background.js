chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.url.includes('chrome://')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        // function copyTextToClipboard(text) {
        //   let copyFrom = document.createElement('textarea')
        //   copyFrom.textContent = text
        //   document.body.appendChild(copyFrom)
        //   copyFrom.select()
        //   document.execCommand('copy')
        //   copyFrom.blur()
        //   document.body.removeChild(copyFrom)
        // }

        async function saveTextToFile(text) {
          const handle = await window.showSaveFilePicker({
            suggestedName: 'credentials',
          })
          const writable = await handle.createWritable()
          await writable.write(text)
          await writable.close()
        }

        document.querySelector('portal-application').click()
        document
          .querySelector(
            'portal-instance-list > div:nth-child(3) > portal-instance > div > div'
          )
          .click()
        setTimeout(() => {
          document
            .querySelector(
              'portal-profile-list portal-profile:nth-child(3) .creds-link a'
            )
            .click()
          setTimeout(async () => {
            const credentials =
              '[default]\n' +
              document
                .querySelectorAll('.code-section')[3]
                .textContent.trim()
                .split('\n')
                .map((line) => line.trim())
                .filter((line) => line != '')
                .slice(1)
                .join('\n')
            // copyTextToClipboard(credentials)
            await saveTextToFile(credentials)
          }, 500)
        }, 1000)
      },
    })
  }
})
