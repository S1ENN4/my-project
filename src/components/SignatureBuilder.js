import React, { useState } from 'react';

function SignatureBuilder() {

  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [font, setFont] = useState('Arial');
  const [fontSize, setFontSize] = useState('12px');
  const [color, setColor] = useState('#000000');
  const [previewOpen, setPreviewOpen] = useState(false);
  


  function handleSubmit(event) {
    
    event.preventDefault();

    const signature = `
      
     
             
          
      <div>
      <img src="${imageUrl}" alt="Profile Picture" style="float: left;" />
      <p style="font-family: ${font}; font-size: ${fontSize}; color: ${color};">${name}</p>
      <p style="font-family: ${font}; font-size: ${fontSize}; color: ${color};">${email}</p>
      <p style="font-family: ${font}; font-size: ${fontSize}; color: ${color};">${phone}</p>
      <td>
      </div>

      <div id="assinatura" name="divAssin";align-items: center;" >
      <br><br>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
      <table>
          <tbody>
              <tr>
                 
                  <td style="font-family: Arial, sans-serif; vertical-align: center;"> 
                      
                          <a href="https://www.every.com.br/" target="blank" rel="noopener"><img alt="ISO" style=" text-decoration:none;"
                             src="https://static.wixstatic.com/media/76ad9f_42622b71155d4cd89a00282c9a1fda2b~mv2.png">
                          </a>
                       
                      </td>
                      <td valign="top" style="vertical-align: center; line-height:18px; ">

                      <table cellpadding="0" cellspacing="0">
                          <tbody>
                              <tr>
                                  <td style="font-size:16pt; height:18px; line-height:18px">
                                      <strong style="font-family: Arial, sans-serif;font-size: 16pt; color:#000e4e;">
                                          
                                          <p style="font-family: ${font}; font-size: ${fontSize}; color: ${color};">${name}</p>
                                      </strong>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="font-size:14pt; height:20px; line-height:20px">
                                      <strong style="font-family: Arial, sans-serif; font-size:12pt; color: #000e4e;">
                                          <p style="margin-left: 10px;" id="cargo"> Cargo </p>
                                          
                                      </strong>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="height:18px; line-height:18px">&nbsp;</td>
                              </tr>
                              <tr> </tr>
                              <tr>
                                  <td><span>&nbsp;<a style="line-height: 1;" id="linkWhats" target="blank" rel="noopener"><img alt="telefone" style="text-decoration:none;" src=""><p style="margin-left: 10px; font-family: ${font}; font-size: ${fontSize}; color: ${color};">${phone}</p></a>
                                  </strong>
                              </span><span style="font-family: Arial, sans-serif;color:#000e4e; font-size: 12pt">
                                  <strong>
                                      | 61 3548-1994 &nbsp;
                                  </strong>
                                      </span>
                                          </strong>
                                          <script> function CopyToClipboard(element) {

                                              var doc = document
                                              , text = doc.getElementById(element)
                                              , range, selection;
                                          
                                          if (doc.body.createTextRange)
                                          {
                                              range = doc.body.createTextRange();
                                              range.moveToElementText(assinatura);
                                              range.select();
                                          } 
                                          else if (window.getSelection)
                                          {
                                              selection = window.getSelection();        
                                              range = doc.createRange();
                                              range.selectNodeContents(assinatura);
                                              selection.removeAllRanges();
                                              selection.addRange(range);
                                           }
                                          document.execCommand('copy');
                                          window.getSelection().removeAllRanges();
                                          document.getElementById("copiar").value="Copied";
                                          alert("Assinatura copiada");
                                      }
                                          </script>
                                      </span>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="font-size:14pt; height:18px; line-height:18px"></td>
                              </tr>
                              <tr>
                                  <td style="font-size:16pt; line-height:18px;">&nbsp;<a href="https://www.linkedin.com/company/everycybersecurityandgrc" target="_blank" rel="noopener"><img alt="linkedin icon" style="text-decoration:none;"
                                      src="https://static.wixstatic.com/media/ecffde_11dbab67c742474a91f27fbaf8bb3675~mv2.png"></a>  <a href="https://www.bloglgpd.com.br/" target="_blank" rel="noopener"><img alt="blog icon"
                                      style=" text-decoration:none;" src="https://static.wixstatic.com/media/ecffde_7c51acd232a1440dbac517202ad9efb6~mv2.png"></a>  <a href="https://www.facebook.com/everytibrasil" target="blank"
                                  rel="noopener"><img alt="facebook icon" style=" text-decoration:none;" src="https://static.wixstatic.com/media/ecffde_8e1ceb2186e34f6ea3ba5431bdf2e369~mv2.png"></a>  <a
                                  href="https://www.instagram.com/everycybersecurity/" target="blank" rel="noopener"><img alt="facebook icon" style=" text-decoration:none;"
                                      src="https://static.wixstatic.com/media/ecffde_464a74fb58ac4d20a37dc4befc48bad3~mv2.png"></a> <span> <a href="http://www.every.com.br" target="_blank" rel="noopener"
                                      style=" text-decoration:none;"><strong style="color:#ff4200; font-family:Arial, sans-serif; font-size:14pt; margin-bottom: 8px;">every.com.br</strong></a>
                                  </span>
                                             
                                          </td>
                                      
                                          
                              </tr></tbody> </table>
                  
                              <div>
                                  <td valign="center" >
                                      <a href="https://www.every.com.br/" target="blank" rel="noopener"><img alt="GPTW" style=" text-decoration:none;"
                                         src="https://static.wixstatic.com/media/76ad9f_3d2adde5079d4ddeb7829e56a45b5311~mv2.png">
                                      </a>
                                  </td>
                                                                                 
                                          
                                  </div>
                              </tr>
                              
                           </tbody>
                          </table>
                           
                          </div>
    `;

    // Insert the generated HTML code into the designated element in the UI
    document.getElementById('signature').innerHTML = signature;
  }

  return (
    <>

      
      <form onSubmit={handleSubmit}>

     



      <label htmlFor="font">Font:</label>
      <select id="font" value={font} onChange={event => setFont(event.target.value)}>
      <option value="Arial">Arial</option>
      <option value="Verdana">Verdana</option>
      <option value="Helvetica">Helvetica</option>
      <option value="Tahoma">Tahoma</option>
      <option value="Trebuchet">Trebuchet</option>
      <option value="Garamond">Garamond</option>
      </select>

      <label htmlFor="font-size">Font Size:</label>
      <select id="font-size" value={fontSize} onChange={event => setFontSize(event.target.value)}>
      <option value="12px">12px</option>
      <option value="13px">13px</option>
      <option value="14px">14px</option>
      <option value="15px">15px</option>
      <option value="16px">16px</option>
      <option value="17px">17px</option>
      <option value="18px">18px</option>
      </select>

        <label htmlFor="color">Color:</label>
        <input type="color" id="color" value={color} onChange={event => setColor(event.target.value)} />

        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" value={imageUrl} onChange={event => setImageUrl(event.target.value)} />


        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />

        <label htmlFor="phone">Phone:</label>
        <input type="phone" id="phone" value={phone} onChange={event => setPhone(event.target.value)} />
    
        <button type="submit">Submit</button>


        <button onClick={() => setPreviewOpen(true)}>Preview</button>

        {previewOpen && (
        <div className="preview-window">
          
            <button onClick={() => setPreviewOpen(false)}>Close Preview</button>
            <div id="preview"></div>
        </div>
        )}

        
        
      </form>
      
      <div id="signature"></div>
    </>
  );
  
}


export default SignatureBuilder;
