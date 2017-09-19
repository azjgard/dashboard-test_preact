// Since we don't want to set up a backend yet,
// this file will emulate some "server" functionality.


// This is example data that the server would read
// from the DB when a page is rendered.
const resourceData = {
  'virtual-machines': {
    'instances': [{
        'name': `Virtual Instance ${ genString() }`,
        'info': {
          'Active': 'true',
          'Created By': 'John',
          'Arbitary Information': 'The first auto insurance policy was purchased in 1897 in Westfield Mass.'
        }
      },
      {
        'name': `Virtual Instance ${ genString() }`,
        'info': {
          'Active': 'true',
          'Created By': 'Jimmy',
          'Arbitary Information': 'The windshield wiper was invented and patented by Mary Anderson in 1905.'
        }
      },
      {
        'name': `Virtual Instance ${ genString() }`,
        'info': {
          'Active': 'true',
          'Created By': 'Joe',
          'Arbitary Information': 'In 1924 a Ford cost $265.00.'
        }
      },
      {
        'name': `Virtual Instance ${ genString() }`,
        'info': {
          'Active': 'true',
          'Created By': 'Jack',
          'Arbitary Information': 'The first coin operated parking meter was installed in Oklahoma City in 1935.'
        }
      },
      {
        'name': `Virtual Instance ${ genString() }`,
        'info': {
          'Active': 'true',
          'Created By': 'Jordin',
          'Arbitary Information': 'The world’s record for people crammed in a Smart car is 19.'
        }
      }
    ]
  },
  'storage-accounts': {
    'instances': [{
        'name': `Storage Instance ${ genString() }`,
        'info': {
          'Active': 'true',
          'Created By': 'Sarah',
          'Arbitary Information': 'The first car radio was invented by Paul Gavin.'
        }
      },
      {
        'name': `Storage Instance ${ genString() }`,
        'info': {
          'Active': 'true',
          'Created By': 'Sally',
          'Arbitary Information': 'Red cars are prohibited in Shanghai China.'
        }
      },
      {
        'name': `Storage Instance ${ genString() }`,
        'info': {
          'Active': 'true',
          'Created By': 'Sue',
          'Arbitary Information': 'The first speeding ticket was issued in 1902.'
        }
      }
    ]
  }
};

// This function returns an example template that the server
// would render (from the DB data) to serve to the page
function render(resource, resourcesClassName) {
  let resourceInfo = resourceData[resource];
  let instances    = [];

  for (let i = 0; i < resourceInfo.instances.length; i++) {
    let res  = resourceInfo.instances[i];
    let info = [];

    for (let key in res.info) {
      info.push(
        <li><b>{ key }</b>: { res.info[key] }</li>
      );
    }
    
    instances.push(
      <div>
        <h2>{ res.name }</h2>
          <ul>
            { info }
          </ul>
      </div>
    );
  }

  return (
    <div class={resourcesClassName}>
      { instances }
    </div>
  );
}

/**
 * genString
 * @description - generates a random string of characters
 */
function genString() {
  let text     = "";
  let possible = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 10; i++)
    text += possible.charAt(
      Math.floor(Math.random() * possible.length)
    );

  return text;
}

export default { render };