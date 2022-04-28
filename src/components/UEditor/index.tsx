import React, { useEffect, useRef } from 'react';

const { UE } = window;

function UEditor(props: any) {
  useEffect(() => {
    try {
      const ue = UE.getEditor('editorcontainer');
    } catch (error) {
      console.log('error', error);
    }
    return () => {
      UE.delEditor('editorcontainer');
    };
  }, []);

  return (
    <div>
      <script
        id="editorcontainer"
        type="text/plain"
        style={{ width: 1024, height: 500 }}
      ></script>
    </div>
  );
}

export default UEditor;
